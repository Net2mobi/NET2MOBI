/*	
	This program incorporates work covered by the following copyright and permission notices:

	Net2mobi CMS is (c) 2011, 2012 Net2mobi Ltd - cms@net2mobi.net - http://net2mobi.net
	Net2mobi CMS is released under the GPL

	and

	Net2mobi CMS - Mobile web & Mobile app builder
	Copyright 2013 by the contributors
	Net2mobi CMS is released under the GPL
*/

function getXhr()
{
	var xhr = null; 
	if(window.XMLHttpRequest)
		xhr = new XMLHttpRequest(); 
	else if(window.ActiveXObject)
	{
	   	try
	   	{
			xhr = new ActiveXObject("Msxml2.XMLHTTP");	
	   	}
	   	catch (e)
		{
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	else {
	   alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest..."); 
	   xhr = false;
	} 
	return xhr;
}

function envoi(text, redirection, action){
	var xhr = getXhr();
	
	xhr.onreadystatechange = function()
	{
		if(xhr.readyState == 4 && xhr.status == 200){
			leselect = xhr.responseText;
			//$('#essai').html(leselect);
			if(action == 'loadTheme')
			{
				obj = $.evalJSON(leselect);
				loadTheme(obj);
			}
			if(action == 'save')
			{
				if(leselect)
				{
					$('.loading2').hide();
					$("#successMessage").html("Sauvegarde r&eacute;ussie");
					$('#sauvegardeReussie').show();
					console.log(leselect);
				}
				else
					alert(leselect);
			}
			if(action == 'loadNomSite')
			{
				nomSites = $.evalJSON(leselect);
				//$('#essai').html(leselect);

				for(i = 0; i < nomSites.sites.length; i++)
				{
					$('<option value="' + nomSites.sites[i].nomSite + '">' + nomSites.sites[i].nomSite + '</option>').appendTo($("#listeSite"));
				}
			}
			if(action == 'suppr')
			{
				//envoi($.toJSON(site), "insert.php", 'save');
			}
			if(action == 'update')
			{
				//$('#essai').html('suppression terminee');
				//envoi($.toJSON(site), "db_manager.php/save", 'save');
			}
			if(action == 'generate')
			{
				if(leselect == true)
				{
					var reg=new RegExp("(&)", "g");
					var s = site.selectedElement;
					site.selectedElement = -1;
					temp = $.toJSON(site);
					temp = temp.replace(reg, "%26");
					envoi(temp, "index.php/db_manager/save", 'save');
					site.selectedElement = s;
				}
				else
					alert(leselect);
			}
			if(action == 'partage_sms')
			{
				$('#resultat').html(leselect);
			}
			if(action == 'appel')
			{
				$("#essai").html("frtyuio");
				eval(leselect);
			}
			if(action == 'detectNav')
			{
				navigateur = leselect;
			}
		}
	}

	xhr.open("POST",redirection, true);

	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

	//$('#essai').html(text);

	xhr.send('content=' + text);
}



//APPEL AJAX POUR UPLOAD FICHIER

function ajaxFileUpload(inputname)
{
	$("#loading").ajaxStart(function()
	{
		$(this).show();
	})
	.ajaxComplete(function()
	{
		$(this).hide();
	});
	
	$.ajaxFileUpload
	(
		{
			url:'<?php echo base_url(); ?>index.php/welcome/upload_img',
			secureuri: false,
			fileElementId: inputname,
			dataType: 'json',
			data: {},
			success: function(data, status)
			{
				if(typeof(data.error) != 'undefined')
				{
					if(data.error == '')
					{
						alert('File path : ' + data.filepath);
						return data.filepath;
					}
					else
					{
						alert(data.error);
					}
				}
			},
			error: function(data, status, e)
			{
				alert(e);
			}
		}
	);
	
	return false;
}