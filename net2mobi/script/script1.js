/*
	This program incorporates work covered by the following copyright and permission notices:

	Net2mobi CMS is (c) 2011, 2012 Net2mobi Ltd - cms@net2mobi.net - http://net2mobi.net
	Net2mobi CMS is released under the GPL

	and

	Net2mobi CMS - Mobile web & Mobile app builder
	Copyright 2013 by the contributors
	Net2mobi CMS is released under the GPL
*/
var bloc =false;
var themeElargir = false;
var configContenuPayementVisible = false;
var indexNum = 0;                    
var nombreMax;                    
var n;
var timer = new Object();
var bol = false;
var survolActive = true;
var question = false;

function paramUtilisantBloc(){
    if(!bloc){
        bloc = true;
        $('#paramSiBloc').show('fade', 500);
        $('.classArrierePlan').hide();
    }
}

$(function(){
    $('#typePageSimple').click(function(){
            bloc =false;
            $('#paramSiBloc').hide();
    });	
    $('.enventClic').click(function(){
        if($(this).attr("id") == "arrierePlan")
        {
            $('.classArrierePlan').show('fade',500);
            $('#paramSiBloc').hide();
            bloc = false;
        }
    });
    $('.tdLienPage').live("dblclick",function(){									
        pageListe();
    });
    $("#btnFlottant").click(function(){
        return check_domain_name();
    });
    
    nombreMax = Math.ceil(($(".bloccomposant").find(".composantCol").size())/4);                                                                                               
    for(var i = 1; i<=nombreMax;i++)
    {
        $(".listeCompoNumero").html($(".listeCompoNumero").html( ) + '<span>' + i + '</span>');	
    }							
    $(".listeCompoNumero span").eq(indexNum).addClass("listeCompoNumeroActive");						
    $(".listeEnteteNumero div").eq(indexNum).css('background-color','#0080FF');
    $( "#button" ).click(function() {
        return false;
    });	
    $( "#effect" ).hide();
    
    $(".ongletPartage").click(function(){
        if($(this).attr("id")=="sms" && $(this).parent().hasClass("partage_ongletInactif")){
            for(var i = 0;i<=4;i=i+2){
                if(i==0){
                    $("#listeOngletPartage li").eq(i).switchClass("partage_ongletInactif", "partage_ongletActif");
                    $("#listeOngletPartage li:eq("+i+") div").switchClass("titreInactif", "Partage_titreActif");
                }
                else{
                    $("#listeOngletPartage li").eq(i).switchClass("partage_ongletActif", "partage_ongletInactif");
                    $("#listeOngletPartage li:eq("+i+") div").switchClass("Partage_titreActif", "titreInactif");
                }
            } 
            $("#listeOngletPartage li").eq(1).switchClass($("#listeOngletPartage li").eq(1).attr("class"), "Partage_sepa1");
            $("#listeOngletPartage li").eq(3).switchClass($("#listeOngletPartage li").eq(3).attr("class"), "Partage_sepa2");            

            $("#cadre5Email, #cadre5Partage").hide();
            $("#cadre5Sms").fadeIn(400);
            
        }
        else if($(this).attr("id")=="email" && $(this).parent().hasClass("partage_ongletInactif")){
            for(var i = 0;i<=4;i=i+2){
                if(i==2){
                    $("#listeOngletPartage li").eq(i).switchClass("partage_ongletInactif", "partage_ongletActif");
                    $("#listeOngletPartage li:eq("+i+") div").switchClass("titreInactif", "Partage_titreActif");
                }
                else{
                    $("#listeOngletPartage li").eq(i).switchClass("partage_ongletActif", "partage_ongletInactif");
                    $("#listeOngletPartage li:eq("+i+") div").switchClass("Partage_titreActif", "titreInactif");
                }
            }
            
            $("#listeOngletPartage li").eq(1).switchClass($("#listeOngletPartage li").eq(1).attr("class"), "Partage_sepa3");
            $("#listeOngletPartage li").eq(3).switchClass($("#listeOngletPartage li").eq(3).attr("class"), "Partage_sepa1"); 
            
            $("#cadre5Sms, #cadre5Partage").hide();
            $("#cadre5Email").fadeIn(400);									            
            									
        }
        else if($(this).attr("id")=="reseauSociau" && $(this).parent().hasClass("partage_ongletInactif")){
            for(var i = 0;i<=4;i=i+2){
                if(i==4){
                    $("#listeOngletPartage li").eq(i).switchClass("partage_ongletInactif", "partage_ongletActif");
                    $("#listeOngletPartage li:eq("+i+") div").switchClass("titreInactif", "Partage_titreActif");
                }
                else{
                    $("#listeOngletPartage li").eq(i).switchClass("partage_ongletActif", "partage_ongletInactif");
                    $("#listeOngletPartage li:eq("+i+") div").switchClass("Partage_titreActif", "titreInactif");
                }
            }
            $("#listeOngletPartage li").eq(1).switchClass($("#listeOngletPartage li").eq(1).attr("class"), "Partage_sepa4");
            $("#listeOngletPartage li").eq(3).switchClass($("#listeOngletPartage li").eq(3).attr("class"), "Partage_sepa3");

            $("#cadre5Sms, #cadre5Email").hide();
            $("#cadre5Partage").fadeIn(400);
        }        
    });
    $(".ongletEditer").click(function(){
        var hauteur_style = parseInt($('#edit_2').css('height'))+120;
        var hauteur_content = parseInt($('#listeElements').css('height'))+120;                
                
        if($(this).attr("id")=="editerContenu" && $(this).hasClass("titreInactif")){
            $('#listeElements').show();
            $("#listeOngletEditer li").eq(0).switchClass("editer_ongletInactif", "editer_ongletActif");
            $("#listeOngletEditer li").eq(2).switchClass("editer_ongletActif", "editer_ongletInactif");																

            $("#listeOngletEditer li:eq(0) div").switchClass("titreInactif", "Partage_titreActif");
            $("#listeOngletEditer li:eq(2) div").switchClass("Partage_titreActif", "titreInactif");
 
            var classAChanger = $("#listeOngletEditer li").eq(1).attr("class");
            if(classAChanger != "Partage_sepa1")
                    $("#listeOngletEditer li").eq(1).switchClass(classAChanger, "Partage_sepa1");

            $(".cadre4Contenu, #nameComposant").fadeIn();
            $(".cadre4Style, #listeNameComposant").hide();            
            
            if (hauteur_content <=400) hauteur_content = 400;                            
            $('#editeurComposant').stop().animate({height : hauteur_content}, 400);
            

        }
        else if($(this).attr("id")=="editerStyle" && $(this).hasClass("titreInactif")){
            $('#listeElements').hide();
            $("#listeOngletEditer li").eq(0).switchClass("editer_ongletActif", "editer_ongletInactif");
            $("#listeOngletEditer li").eq(2).switchClass("editer_ongletInactif", "editer_ongletActif");																

            $("#listeOngletEditer li:eq(0) div").switchClass("Partage_titreActif", "titreInactif");
            $("#listeOngletEditer li:eq(2) div").switchClass("titreInactif", "Partage_titreActif");

            var classAChanger = $("#listeOngletEditer li").eq(1).attr("class");
            if(classAChanger != "Partage_sepa3")
                    $("#listeOngletEditer li").eq(1).switchClass(classAChanger, "Partage_sepa3");

            $(".cadre4Contenu,#nameComposant").hide();
            $(".cadre4Style, #listeNameComposant").fadeIn();
            if(hauteur_style<=400)hauteur_style = 400;
            $('#editeurComposant').stop().animate({height : hauteur_style}, 200);            
        }
    });
    $(".barre_gris_icone").click(function(){								
            fermer_ouvrir ($(this));
    }).stop();

    $("#basic, #gratuit").click(function()							{	
            var barreGrisT = $(this).parent().parent().parent();
            var taille = barreGrisT.find('.barre_gris_icone').length;
            var aT = $(barreGrisT.find('.barre_gris_icone')[taille - 1]);
            if(aT.hasClass("barre_gris_fermer") && $(this).hasClass('titreActif'))
            {										
                aT.removeClass("barre_gris_fermer");
                aT.addClass("barre_gris_ouvert");
                
                $('.'+aT.attr('id')).animate({height:'0px'},400,function(){$(this).hide();});
            }																
            else if((aT.hasClass("barre_gris_ouvert") && $(this).hasClass('titreActif'))||(aT.hasClass("barre_gris_ouvert") && $(this).hasClass('titreInactif')) )
            {														
                aT.removeClass("barre_gris_ouvert");
                aT.addClass("barre_gris_fermer");

                $('.' + aT.attr('id')).show();
                if(aT.attr('id') == "cadre1")
                    $('.' + aT.attr('id')).animate({height : '200px'},400,function(){});
                var courantT = $('div.barre_gris').index(barreGrisT);
                for(var i=1; i<5;i++)
                {
                    if( i!=courantT){
                        if($('.barre_gris').eq(i).find('.barre_gris_fermer').length != 0){
                            $('.barre_gris').eq(i).find('.titre').trigger('click');												
                        }
                    }															
                }
            }								
    });							
    $(".titre").click(function()
    {
            var barreGris = $(this).parent().parent().parent();
            var taille = barreGris.find('.barre_gris_icone').length;
            var a = $(barreGris.find('.barre_gris_icone')[taille - 1]);

            if(a.hasClass("barre_gris_fermer"))
            {
                    a.removeClass("barre_gris_fermer");
                    a.addClass("barre_gris_ouvert");

                    $('.'+a.attr('id')).animate({height:'0px'},400,function(){$(this).hide();});
            }
            else if(a.hasClass("barre_gris_ouvert"))
            {														
                    a.removeClass("barre_gris_ouvert");
                    a.addClass("barre_gris_fermer");

                    $('.' + a.attr('id')).show();
                    if(a.attr('id') == "cadre1")
                            $('.' + a.attr('id')).animate({height : '200px'},400,function(){});
                    if(a.attr('id') == "cadre2")									
                            $('.' + a.attr('id')).animate({height : '190px'},400,function(){});											
                    if(a.attr('id') == "cadre3" || a.attr('id') == "cadre5")
                            $('.' + a.attr('id')).animate({height : '400px'}, 400, function(){});
                    if(a.attr('id') == "cadre4"){	
                        var h;
                        var hauteur_style = parseInt($('#edit_2').css('height'))+120;
                        
                        var hauteur_content = parseInt($('#listeElements').css('height'))+120;
                        
                        if($('#listeOngletEditer li.editer_ongletActif').children().attr('id') == 'editerContenu'){                            
                            h = hauteur_content;
                        }                        
                        if($('#listeOngletEditer li.editer_ongletActif').children().attr('id') == 'editerStyle'){
                            h = hauteur_style;
                             
                        }                       
                        
                        if (h <=400) h = 400;
                        $('.' + a.attr('id')).stop().animate({height : h}, 400, function(){ nbClick = 0; });     
                    }

                    if($('.barre_gris').eq(0).find('.barre_gris_fermer').length != 0){
                            $('.barre_gris').eq(0).find('.titreActif').trigger('click');												
                    }
                    var courant = $('div.barre_gris').index(barreGris);
                    for(var i=1; i<6;i++)
                    {
                            if( i!=courant){
                                    if($('.barre_gris').eq(i).find('.barre_gris_fermer').length != 0){
                                            $('.barre_gris').eq(i).find('.titre').trigger('click');												
                                    }
                            }		
                    }
            }
    });
    $(".ongletTheme").click(function(){
        if($(this).attr("id")=="basic" && $(this).hasClass("titreInactif")){
                $("#listeOngletTheme li").eq(0).switchClass("ongletInactif", "ongletActif");
                $("#listeOngletTheme li").eq(2).switchClass("ongletActif", "ongletInactif");							
                $("#listeOngletTheme li").eq(4).switchClass("ongletActif", "ongletInactif");

                $("#listeOngletTheme li:eq(0) div").switchClass("titreInactif", "titreActif");
                $("#listeOngletTheme li:eq(2) div").switchClass("titreActif", "titreInactif");
                $("#listeOngletTheme li:eq(4) div").switchClass("titreActif", "titreInactif");

                var classAChanger = $("#listeOngletTheme li").eq(1).attr("class");
                $("#listeOngletTheme li").eq(1).switchClass(classAChanger, "sepa1");
                classAChanger = $("#listeOngletTheme li").eq(3).attr("class");								
                $("#listeOngletTheme li").eq(3).switchClass(classAChanger, "sepa2");

                $("#cadre1Basic").fadeIn(1000);
                $("#cadre1Payant").hide();									
                $("#cadre1Gratuit").hide();


        }
        else if($(this).attr("id")=="gratuit" && $(this).hasClass("titreInactif")){									
                $("#listeOngletTheme li").eq(0).switchClass("ongletActif", "ongletInactif");
                $("#listeOngletTheme li").eq(2).switchClass("ongletInactif", "ongletActif");							
                $("#listeOngletTheme li").eq(4).switchClass("ongletActif", "ongletInactif");

                $("#listeOngletTheme li:eq(0) div").switchClass("titreActif", "titreInactif");
                $("#listeOngletTheme li:eq(2) div").switchClass("titreInactif", "titreActif");
                $("#listeOngletTheme li:eq(4) div").switchClass("titreActif", "titreInactif");



                var classAChanger = $("#listeOngletTheme li").eq(1).attr("class");									
                $("#listeOngletTheme li").eq(1).switchClass(classAChanger, "sepa3");
                classAChanger = $("#listeOngletTheme li").eq(3).attr("class");
                $("#listeOngletTheme li").eq(3).switchClass(classAChanger, "sepa1");

                $("#cadre1Basic").hide();
                $("#cadre1Payant").hide();									
                $("#cadre1Gratuit").fadeIn(1000);
        }
        else if($(this).attr("id")=="payant" && $(this).hasClass("titreInactif")){

        }
    });
    $('#btn_validate').click(function () {
        bValidation = true;

        if(bValidation) {							
                var v_pagename = $('#page_name').val();					
                $('#txt_pagename').attr('value', v_pagename);
                $('#dialog-overlay, #dialog-box-Enregistrement').hide();
                clear_form_validation();
                $(".loading2").show();
                $('#sauvegardeReussie').hide();
                showModalDialog('dialog_box_loading', 'dialog-overlay');
                return false;
        }				
    });
    $('#btn_later').click(function() {
        $('#dialog-overlay, #dialog-box-Enregistrement').hide();
        clear_form_validation();
    });
    $('#btn_laterTheme').click(function() {
        $('#dialog-box-EnregistrementTheme, #dialog-overlay').hide();
        clear_form_validation();

    });
    $('#btnAnnulerLien').click(function() {
        $('#dialog-overlay, #dialog_box_insertLinkExt').hide();
        clear_form_validation();
    });

    $('#btn_cancel_UploadImage').click(function() {
        $('#dialog-overlay, #dialog_box_UploadImage').hide();
    });

    $('#btn_Utiliser_UploadImage').click(function() {
            if($('input[type=radio][name=selecteur_type_image]:checked').attr('id') == 'radio_parcourir' && $('#uploadImagePara').val() == "")
                    alert('you must select one file');
            else if($('input[type=radio][name=selecteur_type_image]:checked').attr('id') == 'radio_lien_externe' && $('#inputLienExtImagePara').val() == "")
            {
                alert('You must enter a link');														
            }
            else if($('input[type=radio][name=selecteur_type_image]:checked').attr('id') == 'radio_parcourir')
            {
                $('#dialog-overlay, #dialog_box_UploadImage').hide();
                $('#uploadSubmitImagePara').trigger('click');
            }
            else if($('input[type=radio][name=selecteur_type_image]:checked').attr('id') == 'radio_lien_externe')
            {
                $('#dialog-overlay, #dialog_box_UploadImage').hide();
                tinyMCE.get($("#idImagePara").val()).selection.setContent("<img src='" + $('#inputLienExtImagePara').val() + "' style='width:" + $('input[type=radio][name=selectTailleUpload]:checked').val() + ";" + $("#selectAlignementUpload option:selected").attr("class") + ":" + $("#selectAlignementUpload option:selected").val() + ";" + $('input[type=radio][name=selectFormeUpload]:checked').val() + "'/>");
            }
            else
            {
                $('#dialog-overlay, #dialog_box_UploadImage').hide();
            }

    });
    $(window).resize(function () {           
            if (!$('#dialog-box-Enregistrement').is(':hidden')) 
                showModalDialog('dialog-box-Enregistrement', 'dialog-overlay');		
    });
    
    var tags;
    var defaults = {
        height: 400,
        width: 400,
        radius: 150,
        speed: 3,
        slower: 0.99,
        timer: 5,
        fontMultiplier: 15,
        tagCSSOver: {
            border: 'solid 1px #666',
            color: 'blue',
			"border-radius":'5px'
        },
        tagCSSOut: {
            border: '',
            color: ''
        }
    }
    var forCalcs = {
        halfHeight: null,
        halfWidth: null,
        hwratio: null,
        dtr: null,
        diametr: null,
        speedX: null,
        speedY: null,
        tLength: null
    }
    var curState = {
        mouseOver: null,
        lastFy: null,
        lastFx: null,
        sy: null,
        cy: null,
        sx: null,
        cx: null,
        mouseX: null,
        mouseY: null
    }
    var options = {};
    jQuery.fn.tagSphere = function(opt){
        options = jQuery.extend(defaults, opt);
        initContainer(this);
        initTags(this);
        initCalcs();
        deployTags();
        setInterval(updateTags, options.timer);
        return this;
    };
});


function imageMenuAllezVers(){
    showModalDialog('dialog_box_icone', 'dialog-overlay');
    $('#idIcone').val('upload_image_menu');
}
function elargirSelectTheme(){
    if(!themeElargir){
        themeElargir = true;
        $('.barre_gris_elargir').css('background-position','-79px 0px');
        $('.cadre1').animate({height: '360px'},400);
        $('#rechercheThemeBasic, #rechercheThemeGratuit, #rechercheThemePayant').animate({width:'0px'},400,function(){$('#rechercheThemeBasic, #rechercheThemeGratuit, #rechercheThemePayant').hide();});
        $('#slider').animate({height:'303px',width:'478px'},400);
        $('#flip').animate({height:'300px'},400);

    }
    else
    {
        themeElargir = false;
        $('.barre_gris_elargir').css('background-position','1px 0px');
        $('.cadre1').animate({height: '155px'},400);
        $('#rechercheThemeBasic, #rechercheThemeGratuit, #rechercheThemePayant').show();					
        $('#rechercheThemeBasic, #rechercheThemeGratuit, #rechercheThemePayant').animate({width:'80px'},400);					
        $('#slider').animate({height:'138px',width:'390px'},400);
        $('#flip').animate({height:'135px'},400);

    }
}
function editeurRating(composant){
    createProp({conteneur:'#enteteEditeur', type:'textbox', classProp:'edition_id', classApercu:'#' + composant.attributs.id, comp:composant, strAttr:'id', label:'Mettez le nom de votre composant ici'});				

    var editRating1 = "<span class='souligne gras'>Etiquette:</span>";
    editRating1 += "<input type='checkbox' name='activerEditRating'/>";
    editRating1 += "<span for='activerEtiquette'>Activer</span>";			
    $('#edit_111').append(editRating1);

    var editRating2 ="<div id='tempRaiting'></div>";
    $('#edit_12').append(editRating2);
    $('#edit_11').css('height','25px');
    $("#chargement").hide();
}
function AfficherParametreComposantPayement(){
    if(!configContenuPayementVisible){			
            configContenuPayementVisible = true;
            $('#parametreCompoPayement').show('fade',500);
    }
    else
    {
            configContenuPayementVisible = false;
            $('#parametreCompoPayement').hide('fade',500);
    }
}
function editeurPartage(composant){
    createProp({conteneur:'#enteteEditeur', type:'textbox', classProp:'edition_id', classApercu:'#' + composant.attributs.id, comp:composant, strAttr:'id', label:'Mettez le nom de votre composant ici'});

    var editPartage = 	"<div id='editCompoPartage'>";
    editPartage += 			"<span class='souligne gras'>Glisser l\'outils de partage que vous voulez ici:</span>";
    editPartage += 			"<div id='compoPartageListeActive' class=''>";
    editPartage += 				"<div id='id_casePartagePointille'>";
    editPartage += 					"<div class='casePartagePointille'></div>";
    editPartage += 					"<div class='casePartagePointille'></div>";
    editPartage += 					"<div class='casePartagePointille'></div>";
    editPartage += 					"<div class='casePartagePointille'></div>";
    editPartage += 					"<div class='casePartagePointille'></div>";
    editPartage += 					"<div class='casePartagePointille'></div>";
    editPartage += 					"<div class='casePartagePointille'></div>";
    editPartage += 				"</div>";
    editPartage += 				"<div id='id_Partage'></div>";
    editPartage += 			"</div>";
    editPartage += 			"<div id='compoPartageListeNonActive' class=''>";
    editPartage += 				"<div id='compoPartageFacebook' class='elementPartage'></div>";
    editPartage += 				"<div id='compoPartageTwitter' class='elementPartage'></div>";
    editPartage += 				"<div id='compoPartageMail' class='elementPartage'></div>";
    editPartage += 				"<div id='compoPartageRss' class='elementPartage'></div>";
    editPartage += 				"<div id='compoPartageAjout' class='' onclick='alert(\"En cours de construction\")'></div>";
    editPartage += 			"</div>";
    editPartage +="		</div><br />";
    editPartage += "<span class='souligne gras'>Pâge cible:</span><br />";
    editPartage += "<select id='listePageCible'>";
    editPartage += "<option value='idPage1'>Accueil</option>";
    editPartage += "<option value='idPage2'>Page2</option>";
    editPartage += "</select></div>";

    $('#edit_133').append(editPartage);

    $('#editCompoPartage').show('fade',500);
    $( ".elementPartage" ).draggable({ containment: '#editCompoPartage'});

    $( "#id_Partage" ).droppable({
            accept: ".elementPartage",      
            drop: function( event, ui ) {   

                    ui.draggable.appendTo( $(this) )            
                            .css({                                  
                                    left: '5px',
                                    top:  '10px',
                                    margin: '0 3px'
                            })
                            .draggable({ containment: 'parent' });  
            }				
    });
    $("#chargement").hide();
}
function runEffect() {                        
    var options = {};                        
}
function maxlength_textarea(id, caractRestId, max)
{
    var txtarea = document.getElementById(id);
    document.getElementById(caractRestId).innerHTML=max-txtarea.value.length;                             	
    txtarea.onkeypress=function(){eval('v_maxlength("'+id+'","'+caractRestId+'",'+max+');')};
    txtarea.onblur=function(){eval('v_maxlength("'+id+'","'+caractRestId+'",'+max+');')};
    txtarea.onkeyup=function(){eval('v_maxlength("'+id+'","'+caractRestId+'",'+max+');')};
    txtarea.onkeydown=function(){eval('v_maxlength("'+id+'","'+caractRestId+'",'+max+');')};
}
function v_maxlength(id, caractRestId, max)
{
    var txtarea = document.getElementById(id);
    var crreste = document.getElementById(caractRestId);
    var len = txtarea.value.length;
    if(len>max)
    {
        txtarea.value=txtarea.value.substr(0,max);
    }
    len = txtarea.value.length;
    crreste.innerHTML=max-len;
}
function fermer_ouvrir (a)
{

    if(a.hasClass("barre_gris_fermer"))
    {
        if ( a.attr("id") == 'cadre1' && $('#cadre1Basic').is(":hidden"))
        {
                $('#barre_grisTheme,#cadre1Basic').show('fade',400);
                $('.' + a.attr('id')).animate({height: '200px'},400);
                $('.barre_gris:not(#barre_grisRecherche):not(#cadre1Recherche), #outilEnregistre').show();

        }
        else
        {
                a.removeClass("barre_gris_fermer");
                a.addClass("barre_gris_ouvert");

                $('.' + a.attr('id')).animate({height : '0px'}, 400, function(){ $(this).hide(); });
        }
    }	
    else if (a.hasClass("barre_gris_ouvert"))
    {														
        a.removeClass("barre_gris_ouvert");
        a.addClass("barre_gris_fermer");

        $('.' + a.attr('id')).show();

        if (a.attr('id') == "cadre1")
            $('.' + a.attr('id')).animate({height : '200px'}, 400, function(){ nbClick = 0; });
        if (a.attr('id') == "cadre2")									
            $('.' + a.attr('id')).animate({height : '190px'}, 400, function(){ nbClick = 0; });											
        if (a.attr('id') == "cadre3" || a.attr('id') == "cadre5")
            $('.' + a.attr('id')).animate({height : '400px'}, 400, function(){ nbClick = 0; });
        if (a.attr('id') == "cadre4"){
            var h = parseInt($('#edit_2').css('height'))+120;
            console.log(h + 'function fermer_ouvrir');
            if(h<=400) h=400;
            $('.' + a.attr('id')).stop().animate({height : h}, 400, function(){ nbClick = 0; });     
        }
    }	
}
function pageParametre(valid){
    if(!!valid)
    {
            getWinIfr("apercu_frm").setParams({
                    title:$("#titrePageParam").val(),
                    keywords:$("#motCleParam").val(),
                    description:$("#descriptionParam").val()
            });
    }
    if($(".pageListe:visible").length != 0){
            var p = getWinIfr("apercu_frm").getParams();console.log(p);
            $("#titrePageParam").val(p.title);
            $("#motCleParam").val(p.keywords);
            $("#descriptionParam").val(p.description);
            $(".pageListe").hide('fade',400,function(){$(".pageParametre").show('fade',400);
                $(".parametre_url").css({'background': "#555"})
            });					
            $(".liste_url").css('background', "");
            $("#cache1").hide('fade',1500);
            $('.suppr_url, .accueil_url, .question_url').animate({"opacity":"1"},500);
    }
    else if($(".pageParametre:visible").length != 0){
            $(".pageParametre").hide('fade',400,function(){$("#barreOutils").show('fade',400)});							            
            $(".parametre_url").css('background', "");
    }
    else{
            var p = getWinIfr("apercu_frm").getParams();
            $("#titrePageParam").val(p.title);
            $("#motCleParam").val(p.keywords);
            $("#descriptionParam").val(p.description);            
            $("#barreOutils").hide('fade',400,function(){$(".pageParametre").show('fade',400);
            $(".parametre_url").css({'background': "#555"})});
    }
}                                              
function clear_form_validation()
{
        $('#page_name').attr('value', '');
        $('#page_keyword').val('');
        $('#page_description').val('');
}                 
function showModalDialog(idDialog, idOverlay, idFirstElt)
{
        var v_fadeTime = 200;
        var v_maskWdt = $(document).width();
        var v_maskHgt = $(document).height();

        $('#' + idOverlay).css({width: v_maskWdt, height: v_maskHgt}).fadeIn(v_fadeTime);
        $('#' + idDialog).fadeIn(v_fadeTime);
        if(idFirstElt)
                $('#' + idFirstElt).focus();
}
function initCalcs(){
    forCalcs.halfHeight = options.height / 2;
    forCalcs.halfWidth = options.width / 2;
    forCalcs.speedX = options.speed / forCalcs.halfWidth;
    forCalcs.speedY = options.speed / forCalcs.halfHeight;
    forCalcs.dtr = Math.PI / 180;
    forCalcs.diametr = options.radius * 2;
    forCalcs.hwratio = options.height / options.width;
    forCalcs.whratio = options.width / options.height;
    forCalcs.tLength = tags.length - 1;
    curState.mouseOver = false;
    curState.lastFx = options.speed;
    curState.lastFy = options.speed;
}
    
function initContainer(tagCont){
    tagCont.height(options.height);
    tagCont.width(options.width);
    tagCont.css({
        'overflow': 'hidden',
        'position': 'relative'
    });
    tagCont.mousemove(function(e){
        curState.mouseX = e.pageX - this.offsetLeft;
        curState.mouseY = e.pageY - this.offsetTop;
    });
    tagCont.hover(function(){
        curState.mouseOver = true;
    }, function(){
        curState.mouseOver = false;
    });
}

function initTags(tagCont){
    tags = tagCont.children('ul').children();
    tags.css({
        'position': 'absolute',
        'list-style-type': 'none',
        'list-style-position': 'outside',
        'list-style-image': 'none'
    });
    for (var i = 0; i < tags.length; i++) {
        var jTag = jQuery(tags[i]);
        tags[i] = jTag;
        jTag.hover(function(){
            jQuery(this).css(options.tagCSSOver);
        }, function(){
            jQuery(this).css(options.tagCSSOut);
        })
    }
}

function deployTags(){
    var phi = 0;
    var theta = 0;
    var max = forCalcs.tLength + 1;
    var i = 0;
    while (i++ < max) {
        phi = Math.acos(-1 + (2 * i - 1) / max);
        theta = Math.sqrt(max * Math.PI) * phi;
        tags[i - 1].cx = options.radius * Math.cos(theta) * Math.sin(phi);
        tags[i - 1].cy = options.radius * Math.sin(theta) * Math.sin(phi);
        tags[i - 1].cz = options.radius * Math.cos(phi);
        tags[i - 1].h = jQuery(tags[i - 1]).height() / 4;
        tags[i - 1].w = jQuery(tags[i - 1]).width() / 4;
    }
}

function calcRotation(fy, fx){
    curState.sy = Math.sin(fy * forCalcs.dtr);
    curState.cy = Math.cos(fy * forCalcs.dtr);
    curState.sx = Math.sin(fx * forCalcs.dtr);
    curState.cx = Math.cos(fx * forCalcs.dtr);
}

function updateTags(){
    var fy;
    var fx;
    if (curState.mouseOver) {
        fy = options.speed - forCalcs.speedY * curState.mouseY;
        fx = forCalcs.speedX * curState.mouseX - options.speed;
    }
    else {
        fy = curState.lastFy * options.slower;
        fx = curState.lastFx * options.slower;
    }
    curState.lastFy = fy;
    curState.lastFx = fx;
    if (Math.abs(fy) > 0.01 || Math.abs(fx) > 0.01) {
        calcRotation(fy, fx);
        j = -1;
        while (j++ < forCalcs.tLength) {
            rx1 = tags[j].cx;
            ry1 = tags[j].cy * curState.cy + tags[j].cz * -curState.sy;
            rz1 = tags[j].cy * curState.sy + tags[j].cz * curState.cy;
            tags[j].cx = rx1 * curState.cx + rz1 * curState.sx;
            tags[j].cy = tags[j].cy * curState.cy + tags[j].cz * -curState.sy;
            tags[j].cz = rx1 * -curState.sx + rz1 * curState.cx;
            var per = forCalcs.diametr / (forCalcs.diametr + tags[j].cz);
            tags[j].x = tags[j].cx * per;
            tags[j].y = tags[j].cy * per;
            tags[j].alpha = per / 2;
            tags[j].css({
                'left': forCalcs.whratio * (tags[j].x - tags[j].w * per) + forCalcs.halfWidth,
                'top': forCalcs.hwratio * (tags[j].y - tags[j].h * per) + forCalcs.halfHeight,
                'opacity': tags[j].alpha,
                'font-size': options.fontMultiplier * tags[j].alpha + 'px',
                'z-index': Math.round(-tags[j].cz)
            });
        }
    }
}
function afficherEditer(){
	var i = 0 ;
	for(i=0; i<5;i++){		
            if( i==3){
                if($('.barre_gris').eq(i).find('.barre_gris_ouvert').length != 0){
                    $('.barre_gris').eq(i).find('.titre').trigger('click');	
                }
            }
            else	 
                if($('.barre_gris').eq(i).find('.barre_gris_fermer').length != 0){
                    $('.barre_gris').eq(i).find('.titre').trigger('click');	
                }
	}
        
        /*setTimeout(function(){            */
            if($('#listeOngletEditer li.editer_ongletActif').children().attr('id') == 'editerContenu'){
                var hau = parseInt($('#listeElements').css('height'))+75;                
                if (hau <=400) hau = 400;                
                $('#editeurComposant').stop().animate({height : hau}, 400);
                $('#listeElements').show();
            }
            else 
            if($('#listeOngletEditer li.editer_ongletActif').children().attr('id') == 'editerStyle'){
                $('#listeElements').hide();
                var hau = parseInt($('#edit_2').css('height'))+120;
                if(parseInt($('#editeurComposant').css('height'))!=0){                                                    
                    if (hau <=400) hau = 400;
                    $('#editeurComposant').stop().animate({height : hau}, 400);        
                }
            }
        /*},50);*/
}
function afficherComposant(){		
    for(var i=0; i<5;i++){
        if( i==1)
            if($('.barre_gris').eq(i).find('.barre_gris_ouvert').length != 0)
                $('.barre_gris').eq(i).find('.titre').trigger('click');
        else			
            if($('.barre_gris').eq(i).find('.barre_gris_fermer').length != 0)
                    $('.barre_gris').eq(i).find('.titre').trigger('click');			
    }
}




