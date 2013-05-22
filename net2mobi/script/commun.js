/*
	This program incorporates work covered by the following copyright and permission notices:

	Net2mobi CMS is (c) 2011, 2012 Net2mobi Ltd - cms@net2mobi.net - http://net2mobi.net
	Net2mobi CMS is released under the GPL

	and

	Net2mobi CMS - Mobile web & Mobile app builder
	Copyright 2013 by the contributors
	Net2mobi CMS is released under the GPL
*/

function bindDegradeFond($this)
{
	if($($this).val() == '1')
	{
		var couleur = $('#couleurCommunUnie').val();
		if(couleur != 'url(images/transparent.jpg)')
			$('#ecran1').css('background', degradeGen(couleur, degradeValeur[couleur]));
		site.degrade = true;
	}
	else
	{
		var couleur = $('#couleurCommunUnie').val();
		if(couleur != 'url(images/transparent.jpg)')
			$('#ecran1').css('background', couleur);
		site.degrade = false;
	}
}

function bindEspacementInterne($this)
{
	site.espacementInterne = parseInt($($this).val());
	$("#ecran1").css({"padding-left":site.espacementInterne, "padding-right":site.espacementInterne})
}

function bindEspacementInterneBloc($this)
{
	site.espacementInterneBloc = parseInt($($this).val());
	$(".composant:not(.apercu_element_separateur)").css({"padding-left":site.espacementInterneBloc, "padding-right":site.espacementInterneBloc});
	for(i = 0; i < site.pages.length; i++)
	{
		if(i != site.activePage)
		{
			var elem = $("<div>" + site.pages[i].htmlApercu + "</div");
			elem.find(".composant:not(.apercu_element_separateur)").css({"padding-left":site.espacementInterneBloc, "padding-right":site.espacementInterneBloc})
			site.pages[i].htmlApercu = elem.html();
		}
		
	}
}

function bindEspacementCompo($this)
{
	site.espacementCompo = parseInt($($this).val());
	$(".composant:not(.apercu_element_separateur)").css("padding-bottom", site.espacementCompo);
	for(i = 0; i < site.pages.length; i++)
	{
		if(i != site.activePage)
		{
			var elem = $("<div>" + site.pages[i].htmlApercu + "</div");
			elem.find(".composant:not(.apercu_element_separateur)").css("padding-bottom", site.espacementCompo)
			site.pages[i].htmlApercu = elem.html();
		}
		
	}
}

function bindDegradeMenu($this)
{
	for(i = 0; i < site.pages.length; i++)
	{
		for(j = 0; j < site.pages[i].corps.length; j++)
		{
			if(site.pages[i].corps[j].type == menu)
			{
				var comp = site.pages[i].corps[j];
				var c1 = comp.attributs.style.background;
				var c2 = comp.attributs.style.degrade_color;
				if($($this).val() == '1' && comp.degrade == false)
				{
					comp.degrade = true;
				}
				else if($($this).val() == '0' && comp.degrade == true)
				{
					comp.degrade = false;
				}
				
				if(i != site.activePage)
				{
					var elem = $("<div>" + site.pages[i].htmlApercu + "</div");
					elem.find("#" + comp.attributs.id + " .lienmenu").css("background", ((comp.degrade)? degradeGen(c1, c2) : c1));
					site.pages[i].htmlApercu = elem.html();
				}
				else
				{
					$("#elements #" + comp.attributs.id + " .lienmenu").css("background", ((comp.degrade)? degradeGen(c1, c2) : c1));
				}
			}
		}	
	}
}

$(function()
{
	//newDivDisabled(190, 43, 45, 21, "#cadreArrierePlan", "divCommunCouleur", false, "classArrierePlan");
	//newDivDisabled(190, 25, 45, 65, "#cadreArrierePlan", "divCommunTexture", "classArrierePlan");
	//newDivDisabled(190, 25, 45, 91, "#cadreArrierePlan", "divCommunImage", "classArrierePlan");
	//newDivDisabled(18, 18, 211, 51, "#cadre3_2", "divBloc");
	//initialisation
	/*$("#espacementInterne").val(site.espacementInterne);
	$("#espacementEntreCompo").val(site.espacementCompo);
	$("#espacementInterne, #espacementEntreCompo").click();*/
	//fin initialisation
	
	$("input[type=radio][name=arrierePlan]").click(function()
	{
		if($(this).val() == "couleurUnieFond")
		{
			$("#divCommunCouleur").hide();
			$("#divCommunTexture").show();
			$("#divCommunImage").show();
			
			site.style.background = $(this).val();
			site.style.degrade_color = degradeValeur[$(this).val()];
			site.backgroundType = fondCouleur;
			if(site.degrade)
			{
				$("#ecran1").css("background", degradeGen(site.style.background, site.style.degrade_color));
			}
			else
			{
				$("#ecran1").css("background", $("#couleurCommunUnie").val());
			}
		}
		else if($(this).val() == "textureFond")
		{
			$("#divCommunCouleur").show();
			$("#divCommunTexture").hide();
			$("#divCommunImage").show();
			site.backgroundType = fondTexture;
			if(site.textureFondSrc == "")
				site.textureFondSrc = "images/mobile/texture/" + $("#choixTexture").attr("class") + ".png";
			$("#ecran1").css("background", "url('" + site.textureFondSrc + "')");
		}
		else
		{
			$("#divCommunCouleur").show();
			$("#divCommunTexture").show();
			$("#divCommunImage").hide();
			site.backgroundType = fondImage;
			$("#ecran1").css("background", "url('" + site.imageFondSrc + "')");
		}
	});
	
	$("#couleurCommunUnie").change(function()
	{
		site.style.background = $(this).val();
		site.style.degrade_color = degradeValeur[$(this).val()];
		if(site.degrade)
		{
			$("#ecran1").css("background", degradeGen(site.style.background, site.style.degrade_color));
		}
		else
		{
			$("#ecran1").css("background", $("#couleurCommunUnie").val());
		}
	});
	
	
	
	
	/*script mihaja pour texture */
	
	
	$('#menuflecheBleuTexture').click(function(){
		if($('#selectionTexture:visible').length == 0)
			$('#selectionTexture').show();
		else
			$('#selectionTexture').hide();
	});
		
	$("#selectionTexture li").live("click", function() {
		$('#selectionTexture').hide();
		$("#choixTexture").removeClass();
		$("#choixTexture").addClass($(this).attr('class'));
		site.textureFondSrc = "images/mobile/texture/" + $(this).attr("class") + ".png";
		$("#ecran1").css("background", "url('" + site.textureFondSrc + "')");
	});
	
	$("#boutonUploadImageFond").live("click", function()
	{
		$("#uploadImageFond").click();
	});
	
	$("#uploadImageFond").bind("change", function()
	{
		$("#uploadSubmitImageFond").click();
	});

	//style commun menu allez vers
	$("#couleurCommunTexte").change(function()
	{
		var found;
		for(i = 0; i < site.pages.length; i++)
		{
			found = false;
			for(j = 0; j < site.pages[i].corps.length; j++)
			{
				if(site.pages[i].corps[j].type == menu)
				{
					site.pages[i].corps[j].setStyle("color", $(this).val());
					found = true;
				}
			}
			if(found)
			{
				var elem = $("<div>" + site.pages[i].htmlApercu + "</div");
				elem.find(".apercu_element_menu .titreMenu").css("color", $(this).val());
				site.pages[i].htmlApercu = elem.html();
			}
			
		}
		
		$("#elements .apercu_element_menu .titreMenu").css("color", $(this).val());
	});
	
	$("#couleurCommunFond").change(function()
	{
		for(i = 0; i < site.pages.length; i++)
		{
			for(j = 0; j < site.pages[i].corps.length; j++)
			{
				if(site.pages[i].corps[j].type == menu)
				{
					var comp = site.pages[i].corps[j];
					site.pages[i].corps[j].setStyle("background", $(this).val());
					if(i != site.activePage)
					{
						var elem = $("<div>" + site.pages[i].htmlApercu + "</div");
						elem.find("#" + comp.attributs.id + " .lienmenu").css("background", ((comp.degrade)? degradeGen($(this).val(), degradeValeur[$(this).val()]) : $(this).val()));
						site.pages[i].htmlApercu = elem.html();
					}
					else
					{
						$("#elements #" + comp.attributs.id + " .lienmenu").css("background", ((comp.degrade)? degradeGen($(this).val(), degradeValeur[$(this).val()]) : $(this).val()));
					}
				}
			}
			
			
		}
		
	});
	
	$("#taillePoliceMenu").change(function()
	{
		for(i = 0; i < site.pages.length; i++)
		{
			for(j = 0; j < site.pages[i].corps.length; j++)
			{
				if(site.pages[i].corps[j].type == menu)
				{
					var comp = site.pages[i].corps[j];
					site.pages[i].corps[j].setStyle("font-size", $(this).val());
					if(i != site.activePage)
					{
						var elem = $("<div>" + site.pages[i].htmlApercu + "</div");
						elem.find("#" + comp.attributs.id + " .titreMenu").css("font-size", $(this).val() + "px");
						site.pages[i].htmlApercu = elem.html();
					}
					else
					{
						$("#elements #" + comp.attributs.id + " .titreMenu").css("font-size", $(this).val() + "px");
					}
				}
			}
			
			
		}
	});
	
	$("#typePoliceMenu").change(function()
	{
		for(i = 0; i < site.pages.length; i++)
		{
			for(j = 0; j < site.pages[i].corps.length; j++)
			{
				if(site.pages[i].corps[j].type == menu)
				{
					var comp = site.pages[i].corps[j];
					site.pages[i].corps[j].setStyle("font-family", $(this).val());
					if(i != site.activePage)
					{
						var elem = $("<div>" + site.pages[i].htmlApercu + "</div");
						elem.find("#" + comp.attributs.id + " .titreMenu").css("font-family", $(this).val());
						site.pages[i].htmlApercu = elem.html();
					}
					else
					{
						$("#elements #" + comp.attributs.id + " .titreMenu").css("font-family", $(this).val());
					}
				}
			}
			
			
		}
	});
	
	$("input[name=styleMenu]").change(function()
	{
		var prop;
		var value;
		if($(this).val() == "styleMenuG")
		{
			prop = "font-weight";
			value = (($(this).is(':checked'))? "bold" : "normal");
		}
		else if($(this).val() == "styleMenuI")
		{
			prop = "font-style";
			value = (($(this).is(':checked'))? "italic" : "normal");
		}
		else if($(this).val() == "styleMenuS")
		{
			prop = "text-decoration";
			value = (($(this).is(':checked'))? "underline" : "none");
		}
		
		for(i = 0; i < site.pages.length; i++)
		{
			for(j = 0; j < site.pages[i].corps.length; j++)
			{
				if(site.pages[i].corps[j].type == menu)
				{
					var comp = site.pages[i].corps[j];
					site.pages[i].corps[j].setStyle(prop, value);
					if(i != site.activePage)
					{
						var elem = $("<div>" + site.pages[i].htmlApercu + "</div");
						elem.find("#" + comp.attributs.id + " .titreMenu").css(prop, value);
						site.pages[i].htmlApercu = elem.html();
					}
					else
					{
						$("#elements #" + comp.attributs.id + " .titreMenu").css(prop, value);
					}
				}
			}
			
			
		}
	});
	
	$("input[name=typePage]").click(function()
	{
		if($(this).val() == "typePageSimple")
		{
			site.apparence = siteSimple;
			$("#divBloc").show();
			$("#ecran1").removeClass('apercuPageBloc');
			$("#ecran1").addClass('apercuPageSimple');
			
			$("#elements .composant:not(.apercu_element_separateur)").parent().css("background", 'none');
			$(".sepaFixe .sepaSup, .sepaFixe .sepaInf, #elements .placeholder").css("background", 'none');
			$("#espacementInterne").val(0).change();
			$("#espacementInterneBloc").val(0).change();
			for(i = 0; i < site.pages.length; i++)
			{
				if(i != site.activePage)
				{
					var elem = $("<div>" + site.pages[i].htmlApercu + "</div");
					
					elem.find(".composant:not(.apercu_element_separateur)").parent().css("background", 'none');
					elem.find(".placeholder").css("background", 'none');
					elem.find(".composant:not(.apercu_element_separateur)").css({"padding-left":site.espacementInterneBloc, "padding-right":site.espacementInterneBloc});
					var pageActuelle = site.pages[i];
					elem.find('.apercu_element_separateur').each(function()
					{
						
						$(this).replaceWith(pageActuelle.getComposantById($(this).attr('id')).code());
					});
					pageActuelle.htmlApercu = elem.html();
				}
				
			}
		}
		
		else
		{
			site.apparence = siteBloc;
			$("#divBloc").hide();
			$("#ecran1").removeClass('apercuPageSimple');
			$("#ecran1").addClass('apercuPageBloc');
			
			$("#elements .composant:not(.apercu_element_separateur)").parent().css("background", $("#couleurBloc").val());
			$(".sepaCompo .sepaSup, .sepaCompo .sepaInf, #elements .placeholder").css("background", $("#couleurBloc").val());
			$("#espacementInterne").val(0).change();
                        console.log('esp_intern'+site.espacementInterne);
			$("#espacementInterneBloc").val(0).change();
			//console.log('taille' + site.pages.length);
			for(i = 0; i < site.pages.length; i++)
			{
				console.log('page' + i);
				if(i != site.activePage)
				{
					//console.log('not active');
					var elem = $("<div>" + site.pages[i].htmlApercu + "</div");
					
					elem.find(".composant:not(.apercu_element_separateur)").parent().css("background", $("#couleurBloc").val());
					elem.find(".placeholder").css("background", $("#couleurBloc").val());
					elem.find(".composant:not(.apercu_element_separateur)").css({"padding-left":site.espacementInterneBloc, "padding-right":site.espacementInterneBloc});
					var pageActuelle = site.pages[i];
					elem.find('.apercu_element_separateur').each(function()
					{
						//console.log('first' + i);
						$(this).replaceWith(pageActuelle.getComposantById($(this).attr('id')).code());
					});
					//console.log('second' + i);
					pageActuelle.htmlApercu = elem.html();
				}
				
			}
		}
		
		//transformation des séparateurs existants
		$('#elements .apercu_element_separateur').each(function()
		{
			$(this).replaceWith(site.pages[site.activePage].getComposantById($(this).attr('id')).code());
		});
	});
	
	$("#couleurBloc").change(function()
	{
		site.backgroundCompo = $("#couleurBloc").val();
		if(site.apparence = siteBloc)
		{
			$("#elements .composant:not(.apercu_element_separateur)").parent().css("background", $("#couleurBloc").val());
			$(".sepaCompo .sepaSup, .sepaCompo .sepaInf, #elements .placeholder").css("background", $("#couleurBloc").val());
			
			for(i = 0; i < site.pages.length; i++)
			{
				if(i != site.activePage)
				{
					var elem = $("<div>" + site.pages[i].htmlApercu + "</div");
					elem.find(".composant:not(.apercu_element_separateur)").parent().css("background", $("#couleurBloc").val());
					elem.find(".placeholder").css("background", $("#couleurBloc").val());
					elem.find(".sepaSup, .sepaInf").css("background", $("#couleurBloc").val());
					site.pages[i].htmlApercu = elem.html();
				}
				
			}
		}
		
	});
});