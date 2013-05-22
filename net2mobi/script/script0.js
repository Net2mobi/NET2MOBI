/*
	This program incorporates work covered by the following copyright and permission notices:

	Net2mobi CMS is (c) 2011, 2012 Net2mobi Ltd - cms@net2mobi.net - http://net2mobi.net
	Net2mobi CMS is released under the GPL

	and

	Net2mobi CMS - Mobile web & Mobile app builder
	Copyright 2013 by the contributors
	Net2mobi CMS is released under the GPL
*/
var renommerPageActive = false;

function deposerComposant(t)
{
	comp = eval("new "+t+"()");
	obj = {
		type: t
	}
	getWinIfr("apercu_frm").acceptDrop(t, comp);
}

function getWinIfr(id)
{
    return (!!frames[id].contentWindow)? frames[id].contentWindow : frames[id];
}

function refreshPageListe(actPage)
{
	renommerPageActive = false;
	list = getWinIfr("apercu_frm").getPageList();
	$("#scrollPageListe table").html('');
	nb = 0; boolAccueil = false;
	for(var p in list)
	{	
		nb++;
		pCode = '<tr ' + ((actPage == list[p].name)? 'class="selectedPage"' : '') + '>';
		pCode += 	'<td>';
		pCode +=		'<span class="lienPage">';
		pCode +=			'<span class="nomPage">' + list[p].name + '</span>';
		pCode +=		'</span>';
		pCode +=		'<input class="inputRenommerPage" type="text" style="display:none" />';
		pCode +=		'<img title="Save" class="validerRenommerPage" src="img/icone/ok.png" width="20" style="display:none;vertical-align:sub;"/>';
		pCode +=		'<img title="Cancel" class="annulerRenommerPage" src="img/icone/cancel.png" width="20" style="display:none;vertical-align:sub;"/>';
		pCode +=	'</td>';
		pCode +=	'<td>';
		pCode +=		'<div class="renommerPage"></div>';
		pCode +=	'</td>';
		pCode +=	'<td>';
		pCode +=		'<div class="radioBoutonAccueil">';
		pCode +=			'<img class="radioPageAccueil" src="img/icone/' + ((list[p].accueil)? 'radio_plein' : 'radio_vide') + '.png">';
		pCode +=			'<input type="radio" name="accueil" style="width:0;margin:0;" ' + ((list[p].accueil)? 'checked' : '') + '>';
		pCode +=		'</div>';
		pCode +=		'<div class="iconeAccueil">';
		pCode +=		'</div>';
		pCode +=	'</td>';
		pCode +=	'<td>';
		pCode +=		'<div class="supprimerPage">';
		pCode +=		'</div>';
		pCode +=	'</td>';
		pCode +='</tr>';
		$("#scrollPageListe table").append(pCode);
		if(list[p].accueil && actPage == list[p].name) boolAccueil = true;
	}
	$('#nombrePage').html(nb);
	if(boolAccueil) $(".accueil1").addClass("checked"); else $(".accueil1").removeClass("checked");
}

function eraseEditor()
{
	$("#edit_1").html("");
	$("#edit_2").html("");
}

function rgb2hex(rgb) {
    var hex = '#';
    $.each(rgb.substring(4).split(','), function(i, str){
        var h = ($.trim(str.replace(')',''))*1).toString(16);
        hex += (h.length == 1) ? "0" + h : h;
    });
    return hex;
}

function insertIcone(data){
	console.log(data.focusedFile.url);
	$('#dialog-overlay, #dialog_box_icone_manager').hide();
	$('.imageIcone').css('display','block').attr("src", data.focusedFile.url);
	getWinIfr("apercu_frm").setIcone(data.focusedFile.url);
}

function showMcim(callback){	
	mcImageManager.browse({target_frame:"mcim_frm", oninsert:callback});
	showModalDialog('dialog_box_icone_manager', 'dialog-overlay');
}

function bindHoverItems(){
	$(".net2-btn-listElements").hover(function(){
		$("#" + $(this).attr("net2-cible"), getWinIfr("apercu_frm").document).addClass("net2-elem-hovered");
	},
	function(){
		$("#" + $(this).attr("net2-cible"), getWinIfr("apercu_frm").document).removeClass("net2-elem-hovered");
	});
}

function imageTemplateUploaded(data)
{
	$("#dialog-box-EnregistrementTheme form input[name=img]").val("/net2mobi/script/imagemanager/net2mobi/themes/" + data.files[0].name);
}

$(function()
{
	jQuery('#banner .oneByOne_item  img').live('click',function(e){
	        e.preventDefault();
	        window.open(jQuery(this).parent().find("a").attr("href"),"");        
	});
	envoi('', 'navigateur.php', 'detectNav');
	
	$("img").mousedown(function(){
    	return false;
	});
	
	$(".bloccomposant li div:not(.element_vierge)").parent().draggable
	({
		cursorAt: { left: 0, top: 0 },
	 	revert : 'invalid',
	 	helper : 'clone',
		iframeFix: true,
		opacity : 0.5,
		stop: function(e) {
			getWinIfr("apercu_frm").cancelSort();
		}
	});
	
	$( '#apercu_frm' ).droppable({
		accept:".outil",
		drop: function(event, ui){
			if(!!ui.draggable.find('div').attr("net2-name"))
			{
				deposerComposant(ui.draggable.find('div').attr("net2-name"));
			}
		}
	});

	$(document).bind("mousemove", function(e){
		if(e.target.className == "ui-draggable-iframeFix")
		{
			getWinIfr("apercu_frm").mouseY = e.offsetY;
		}

	});
	
	$(".ui-draggable-iframeFix").live("mouseenter", function(e){
		getWinIfr("apercu_frm").activateSort(e.offsetY, $(getWinIfr("apercu_frm")).scrollTop());
	});
	$(".ui-draggable-iframeFix").live("mouseleave", function(e){
		getWinIfr("apercu_frm").cancelSort();
	});
	
	setInterval(
		function(){
			$(".ui-page-active", getWinIfr("apercu_frm").document).css("min-height", "540px");
			h = $(".ui-page-active", getWinIfr("apercu_frm").document).height();
			$("#apercu_frm").height(h);
			$("#apercu_frm_content").height(h * 75 / 100);
		},
		60
	);
	
	$("#apercu_frm_scroll").scrollbar({
            height : 405, width : 240, type : "scrollbar", scrollerEase : 3,
            dragVertical  : true, dragHorizontal: false, barWidth : 6, draggerVerticalSize : "auto",
            roundCorners : 5, distanceFromBar : 0,
            mouseWheel : true, mouseWheelOrientation : "vertical", mouseWheelSpeed : 10,
            draggerColor : "#111111", draggerOverColor : "#a1dc13", barColor : "#E6E6E6", barOverColor : "#CCCCCC"
	});
        $('#listNumScroll, #listMailScroll').scrollbar({
            height : 325, width : 200, type : "scrollbar", scrollerEase : 3,
            dragVertical  : true, dragHorizontal: false, barWidth : 6, draggerVerticalSize : "auto",
            roundCorners : 5, distanceFromBar : 0,
            mouseWheel : true, mouseWheelOrientation : "vertical", mouseWheelSpeed : 10,
            draggerColor : "#111111", draggerOverColor : "#22BBF9", barColor : "transparent", barOverColor : "#CCCCCC"
        });
	
	$("#conteneurPageListe").scrollbar({
		height : 412, width : 460, type : "scrollbar", scrollerEase : 3,
		dragVertical  : true, dragHorizontal: false, barWidth : 6, draggerVerticalSize : "auto",
		roundCorners : 5, distanceFromBar : 0,
		mouseWheel : true, mouseWheelOrientation : "vertical", mouseWheelSpeed : 10,
		draggerColor : "#111111", draggerOverColor : "#a1dc13", barColor : "#E6E6E6", barOverColor : "#CCCCCC"
	});
	
	$("#toggle_apercu").buttonset();
	
	$("input[name=toggle_apercu]").live("change", function(){
		if($(this).attr("id") == "apercu_edition"){
			$("#transparentPreview").fadeOut();
			getWinIfr("apercu_frm").activateEdition();
			$(".bloccomposant li div:not(.element_vierge)").parent().draggable("enable");
			$("#apercu_frm").droppable("enable");
			$("#apercu").removeClass("z-indexPreview");
		}
		else if($(this).attr("id") == "apercu_visualisation"){
			$("#transparentPreview").fadeIn();
			getWinIfr("apercu_frm").activateVisualisation();
			$(".bloccomposant li div:not(.element_vierge)").parent().draggable("disable").removeClass("ui-state-disabled");
			$("#apercu_frm").droppable("disable").removeClass("ui-state-disabled");
			eraseEditor();console.log("sdf");
			$("#apercu").addClass("z-indexPreview");
		}
	});
	
	$('.nouveau').live("click", function(){						
		getWinIfr("apercu_frm").newPage();
	});
	
	$('.suppr').click(function(){
		if(parseInt($("#nombrePage").html()) == 1)
		{
			alert("Your mobile site must have at least 1 page");
			return;
		}
		
		getWinIfr("apercu_frm").deletePage();
	});
	
	$('.supprimerPage').live('click', function(){
		if(parseInt($("#nombrePage").html()) == 1)
		{
			alert("Your mobile site must have at least 1 page");
			return;
		}
	
		pageToDelete = $(this).parent().parent().find(".nomPage").html();
		$(this).parent().parent().find("td").hide('fade', 500, function(){
			getWinIfr("apercu_frm").deletePage(pageToDelete);
		});
	});
	
	$(".accueil1, .accueil2").hover(
		function()
		{			
			$(".accueil2").css("background-position", "-485px 2px");
			$(".accueil1").addClass("hovered");					
		},
		function()
		{	
			$(".accueil2").css("background-position", "-525px 2px");
			$(".accueil1").removeClass("hovered");					
		}
	);
	
	$(".accueil1, .accueil2").live("click", function(){			
		if(!$(".accueil1").is(".checked"))
		{
			$(".accueil1").addClass("checked");
			getWinIfr("apercu_frm").updateHomepage();
		}			
	});
	
	$(".lienPage").live("click", function(){
		if(!$(this).parent().parent().is(".selectedPage"))
		{
			eraseEditor();
			getWinIfr("apercu_frm").changePage($(this).find(".nomPage").html());
		}
	});
	
	$('.radioPageAccueil').live('click', function(){
		$(this).siblings("input[type=radio]").click();
	});
	
	$("input[type=radio][name=accueil]").live("change", function(){
		getWinIfr("apercu_frm").updateHomepage($(this).parent().parent().parent().find(".nomPage").html());
	});
	
	$('.renommerPage').live('click', function(){
		if(renommerPageActive)
		{
			alert("A page rename action is already happening."); return;
		}
		renommerPageActive = true;
		$(this).parent().parent().find('.nomPage').hide();
		$(this).parent().parent().find('.inputRenommerPage').val($(this).parent().parent().find('.nomPage').html()).show().focus();
		$(this).parent().parent().find('.validerRenommerPage, .annulerRenommerPage').show();

		
	});
	
	$(".inputRenommerPage").live("keyup", function(ev){
		if(ev.keyCode == 13)
			$(this).parent().find(".validerRenommerPage").click();
		else if(ev.keyCode == 27)
			$(this).parent().find(".annulerRenommerPage").click();
	});
	
	$('.validerRenommerPage').live('click', function(){
		if(!getWinIfr("apercu_frm").renamePage($(this).parent().find(".nomPage").html(), $(this).parent().find(".inputRenommerPage").val()))
		{
			alert("This name is already used.");
		}
	});
	
	$('.annulerRenommerPage').live('click', function(){
		renommerPageActive = false;
		$(this).hide();
		$(this).parent().find(".validerRenommerPage, .inputRenommerPage").hide();
		$(this).parent().find(".nomPage").show();
	});
	
	$("#btnEnregistrer").live("click", function(){
		var p = getWinIfr("apercu_frm").getParams();console.log(p);
		$("#page_keyword").val(p.keywords);
		$("#page_description").val(p.description);
		showModalDialog('dialog-box-Enregistrement', 'dialog-overlay', 'page_name');
	});
	
	$('#btn_validate').click(function()
	{
		getWinIfr("apercu_frm").setParams({
			keywords:$("#page_keyword").val(),
			description:$("#page_description").val()
		});
		var html = $("html", getWinIfr("apercu_frm").document).clone();
		var head = $("head", getWinIfr("apercu_frm").document).clone();
		var body = $("body", getWinIfr("apercu_frm").document).clone();
		head.find("[net2remove], base").remove();
		
		body.find("[data-role=page]").attr("net2natif", "net2natif").removeClass("ui-page-active");
		body.find(".net2-composant").attr("net2natif", "net2natif").removeClass("selected");;
		while(body.find(":not([net2natif])").length > 0)
		{
			actuel = $(body.find(":not([net2natif])")[0]);
			if(actuel.find("[net2natif]").length > 0) actuel.replaceWith(actuel.contents());
			else actuel.remove();
		}
		
		$.post(
			"/net2mobi/index.php/welcome/generate",
			{html: html.html(), head : head.html(), body : body.html()},
			function(data){
				$('.loading2').hide();
				$("#successMessage").html("Sauvegarde r&eacute;ussie");
				$('#sauvegardeReussie').show();
			}
		);

	});
	
	$('#btn_validateTheme').live('click',function()
	{	console.log("fff");
		var html = $("html", getWinIfr("apercu_frm").document).clone();
		
		html.find("[data-role=page]").removeClass("ui-page-active");
		html.find(".net2-composant").attr("net2natif", "net2natif").removeClass("selected");
		html.find(".net2-sort-handler, .net2-suppr, #net2-loading").attr("net2natif", "net2natif");
		while(html.find(":not([net2natif])").length > 0)
		{
			actuel = $(html.find(":not([net2natif])")[0]);
			if(actuel.find("[net2natif]").length > 0) actuel.replaceWith(actuel.contents());
			else actuel.remove();
		}
		html.find(".net2-sort-handler, .net2-suppr, #net2-loading").removeAttr("net2natif", "net2natif");
		
		$("textarea[name=html]").val(html.html());
		console.log(html.html());
		$.post(
			"/net2mobi/index.php/template/add_new_entry",
			$("#dialog-box-EnregistrementTheme form").serialize(),
			function(data){
				$("#dialog-box-EnregistrementTheme #dialog-message").html(data);
			}
		);
	
	});
	
	$(".tpl_pos_4").live("click", function(){
		$("#apercu_frm").attr("src", "build/?id=" + $(this).attr("net2-theme-id"));
	});
	
	$(".separateur.ico").button({
		text: false,
		icons: {
			primary: "ui-icon-triangle-1-s"
		}
	}).live("click", function(){
		var menu = $("#listIcoActions").show().position({
			my: "left top",
			at: "left bottom",
			of: this
		});
		$( document ).one( "click", function() {
			$("#listIcoActions").hide();
		});
		return false;
	});
	
	$("#listIcoActions").hide().menu({
		select: function(event, ui){
			console.log($(ui.item).attr("id"));
			if($(ui.item).attr("id") == "ico_ext"){
				$('#ico_ext_link').val($('.imageIcone').attr("src"));
				showModalDialog('dialog_box_icone', 'dialog-overlay');
			}
			else{
				showMcim(insertIcone);
			}
		}
	});
	
	$('#btn_cancel_icone').click(function() {
		$('#dialog-overlay, #dialog_box_icone').hide();
	});
	
	$('#btn_cancel_mcim').click(function() {
		$('#dialog-overlay, #dialog_box_icone_manager').hide();
	});
	
	$('#btn_Utiliser_icone').click(function() {		
		if($('#ico_ext_link').val() != '')
		{
			$('.imageIcone').css('display','block').attr("src", $('#ico_ext_link').val());
			$('#dialog-overlay, #dialog_box_icone').hide();
			getWinIfr("apercu_frm").setIcone($('#ico_ext_link').val());
		}
	});
	
	$('.imageIcone').live("click", function(){
		$(".separateur.ico").click();
	});
	
	$("#listeElements").sortable({
		items: "div.net2-elem-sortable",
		placeholder: "elem_placeholder",
		axis : 'y',
		forcePlaceholderSize: true,
		scroll:true,
		stop:function(event, ui){
			var cible = $("#" + ui.item.attr("net2-cible"), getWinIfr("apercu_frm").document);
			if(ui.item.index() > cible.index())
			{
				$(ui.item.attr("net2-tagname"), getWinIfr("apercu_frm").document).eq(ui.item.index()).after(cible);
				getWinIfr("apercu_frm").refreshComposant();
				console.log(cible.attr('id'));
			}
			else if(ui.item.index() < cible.index())
			{
				$(ui.item.attr("net2-tagname"), getWinIfr("apercu_frm").document).eq(ui.item.index()).before(cible);
				getWinIfr("apercu_frm").refreshComposant();
			}
			
			if(ui.item.is("[net2-isnav]")){
				$(ui.item.attr("net2-tagname"), getWinIfr("apercu_frm").document).each(function(nb){
					$(this).attr("class", "").attr("class", "ui-block-"+String.fromCharCode(97 + nb));
				});
			}
		}
	});
	
	$("#domain_name").keyup(function()
	{
		site.nom = $(this).val();
	});

	
	$('.btnOk2').live('click', function()
	{
		$(".loading2").show();
		$('#sauvegardeReussie').hide();
		showModalDialog('dialog_box_loading', 'dialog-overlay');
		envoi($('.' + $('#listeOngletTheme .titreActif').attr('id') + ' .themeActuel').attr("id"), "index.php/db_manager/load", 'loadTheme');
	});

	$('#supprAll').click(function()
	{
		envoi("", "CmdDeleteAllSites.php", 'supprAll');
		$("#listeSite option").remove();
	});
	
	
	$('input[type=radio][name=fond]').change(function()
	{
		if($('input[type=radio][name=fond]:checked').attr('value') == 'unie')
		{
			site.backgroundType = unie;
			$('#ecran').css({'background': '-moz-linear-gradient(center top , ' + site.backgroundColor + ', '+site.backgroundColor+') repeat scroll 0 0 transparent'});
			$('#ecran1').css({'background': '-webkit-gradient(linear, center top , center bottom, from('+site.backgroundColor+'), to('+site.backgroundColor+'))'});
		}
		else if($('input[type=radio][name=fond]:checked').attr('value') == 'degrade')
		{
			site.backgroundType = degrade;
			$('#ecran').css({'background': '-moz-linear-gradient(center top , ' + site.backgroundColor1 + ', '+site.backgroundColor2+') repeat scroll 0 0 transparent'});
			$('#ecran1').css({'background': '-webkit-gradient(linear, center top , center bottom, from('+site.backgroundColor1+'), to('+site.backgroundColor2+'))'});
		}
		else if($('input[type=radio][name=fond]:checked').attr('value') == 'texture')
		{
			site.backgroundType = texture;
		}
		
		$('#para').html($(this).attr('value'));
		$('#para').html($('#para').html() + site.backgroundType);
	});															
	
	
	$('#ajouter_num').live('click', function()
	{
		
		$('#ajouter_num').remove();
		$('#listNum').append('<div><input type="text" class="num inputNum net2-text" value="" /><span class="supprimer_num"></span></div><div id="ajouter_num">ajouter numero...</div>');
		
		
	});
	$('#ajouter_email').live('click', function(){		
		$('#ajouter_email').remove();
		$('#listEmail').append('<div><input type="text" class="inputEmail net2-text" value="" /><span class="supprimer_num"></span></div><div id="ajouter_email">ajouter email...</div>');
		
		
	});
	
	$('.supprimer_num').live('click', function()
	{
		$(this).parent().remove();
	});
	
	$('#partage_sms').live('click', function()
	{
		var text = '';
		for(i = 0; i < $('.inputNum').length; i++)
		{
			text += $('.inputNum').eq(i).val();
			if(i != $('.inputNum').length - 1)
				text += '|';
		}
		var msgPerso = $("#msgperso").val();
		
		var json = '{"to":"' + text + '", "msgperso":"' + msgPerso + '", "expediteur":"' + $("#expediteur").val() + '", "msg":"De la part de net2mobi"}';
		$("#resultat").html(json);
		envoi(json, "partageSms.php", 'partage_sms');
	});
	
	
	$('#partagefb').live('mousedown', function()
	{
		$('#partagefb').attr("href", "http://www.facebook.com/sharer.php?u=www." + site.nom + ".com");
		$("#resultat").html('ggdsgsd');
	});
	
	
	
	$('.editeur').live('DOMNodeRemoved', function()
        {
            tinyMCE.get($(this).attr('id')).remove();
        });
			
	$(window).scroll(function() {                
            if($(this).scrollTop()>300)
            {
                if(!apercuFixed)
                {
                    apercuFixed = true;
                    
                    $('#url').css({'position':'fixed','top':'-40px'});
                    $('#url').stop().animate({top:'-5px'},200);
                    $('#apercu').css({'top':'0px','position':'fixed'});
                    $('#apercu').stop().animate({top:'35px'},200);
                    $('.pageListe').css({'margin-top':'33px'});
                    $('#barreOutils').css({'margin-top':'-326px'});
                }
            }
            else if($(this).scrollTop()<183)
            {
                if(apercuFixed)
                {
                    apercuFixed = false;
                    $('#url,#apercu').css({'position':'relative','top': 'auto'});
                    $('.pageListe').css({'margin-top':'-12px'});
                    $('#barreOutils').css({'margin-top':'-495px'});
                }
            }		
	});	
	$(document).bind("selectstart", function(){
            return false;
	});
	$('#annulerPageListe').live('click', function(){		
                $("#cache1").hide('fade',1500);
                $('.suppr_url, .accueil_url, .question_url').animate({"opacity":"1"},500);		
		site.chargerPage(site.lastActivePage);
		$(this).parent().parent().parent().find('tr').removeClass('selectedPage');
		$(this).parent().parent().parent().find('tr').eq(site.activePage).addClass('selectedPage');
		$(".pageListe").hide('fade',500,function(){$("#barreOutils").show('fade',500)});
		$(".barre_gris:not(#barre_grisRecherche)").show('fade',500);
		$(".liste_url").css('background', "");
	});
	
	$(document).click(function(e){
		if($(e.target).attr('id') != 'selectionTel' && !$(e.target).hasClass('menuflecheBleu'))
			$('#selectionTel').hide();
	});
	setInterval(function()
	{ 
            if ($('#ecran1').hasClass('apercuPageBloc'))
            {
                $('#ecran1').find($('.lienmenu')).css( {'right':'1px'} );
                $('#ecran1').find($('.divImage')).css( {'width':'97%' , 'margin-left':'2px'} );
                $('#ecran1').find($('.sepaHaut')).css( {'width':'100%'} );

            }
		
	},50);
	
	
	$('.inputNum').live('keyup', function(e)
	{
		if(e.keyCode == 13)
			$('.inputNum').eq($('.inputNum').index(this) + 1).focus();
	});
	$('.option').live('keyup', function(e)
	{
		if(e.keyCode == 13)
			$('.option').eq($('.option').index(this) + 1).focus();
	});
	
	$('.icone_url').click(function()
	{
		$('#chargerIcone').trigger('click');
	});
	$("#couleurUnieFond").change(function(){
		$("#couleurCommunUnie").val($("#couleurCommunUnie").val()).change();
	});
});

function pageListe(){
	if($(".pageParametre:visible").length != 0){
		$(".pageParametre").hide('fade',500,function(){$(".pageListe").show('fade',500);$(".liste_url").css('background', "#555")});
		$(".parametre_url").css('background', "");
		
		
	}else if($(".pageListe:visible").length != 0){
		$(".pageListe").hide('fade',500,function(){$("#barreOutils").show('fade',500)});
		$(".barre_gris").show('fade',500);
		$(".liste_url").css('background', "");
	}else{
		$(".barre_gris").hide('fade',500);
		$("#barreOutils").hide('fade',500,function(){$(".pageListe").fadeIn(500, function(){$('#scrollPageListe').trigger('resize');});$(".liste_url").css('background', "#555");});
		
	}
}


function selectTel(el){   
    $('.sepaHaut,.sepaBas').css('height','6px');    
    if (el == 0)
    {                 
        $(".apercuPageSimple .placeholder").css('height','331px'); 				 
        if($('#scroll_parent').children().hasClass('scrollbar') || $('#scroll_parent').children().hasClass('scrollbar1'))
            {                                                 
                $('#scroll').unwrap().unwrap();
                $("#scroll_parent").children().next().remove();
                $('#scroll').wrap("<div class='scrollbar1'><div class='content1'></div></div>");
            }	
     }
     else
     {              
         $(".apercuPageSimple .placeholder").css('height','352px');
     }
        
}

var flag = 1;
var flag_EV = 0;

function getIdActiveTab()
{
	switch(animation)
	{
		case 0: 
			return "#composant";
			break;
		case 1: 
			return "#editerAnimation";
			break;
		case 2: 
			return "#styleCommuns";
			break;
		case 3: 
			return "#partage";
			break;
	}
}

function refreshImage(filename, res, id)
{	
	if(res == "res_error")
	{
		
	}
	else if(res == "res_success") {
		//$("#uploadStatus").html("Fichier t�l�charg�");
		if(id == 'upload_icone')
		{
			if($(".ico").find('img').length == 0)
				$('.ico').append("<img class='imageIcone' alt='ico' />")
			
			$(".ico").find('img').attr("src", filename);
			site.icoSrc = filename;
		}
		else if(id == 'upload_image_menu')
		{
			$("#image_menu").attr("src", filename);
			$("#" + $(".edition_id").val() + " .thumbnail").attr("src", filename);
			site.pages[site.activePage].getComposantById($(".edition_id").val()).thumbnail = true;
			site.pages[site.activePage].getComposantById($(".edition_id").val()).attributs.src = filename;
		}
		else if(id == 'paraEditeur')
		{
			tinyMCE.get('paraEditeur').selection.setContent("<img src='http://net2mobi.net/9e9/" + filename + "' style='width:" + $('input[type=radio][name=selectTailleUpload]:checked').val() + ";" + $("#selectAlignementUpload option:selected").attr("class") + ":" + $("#selectAlignementUpload option:selected").val() + ";" + $('input[type=radio][name=selectFormeUpload]:checked').val() + "'/>");
		}
		else if(id == 'upload_image_fond')
		{
			site.imageFondSrc = filename;
			$("#ecran1").css("background", "url('" + site.imageFondSrc + "')");
		}
		else
		{
			$("#" + id + " .imageCompo").attr("src", filename);
			site.pages[site.activePage].getComposantById(id).attributs.src = filename;
			//alert(site.pages[site.activePage].getComposantById(id).attributs.src);
		}
	}
}
							
function degradeGen(c1, c2)
{
	if(navigateur == NAV_CHROME)
		return '-webkit-gradient(linear, center top, center bottom, from(' + c1 + '), to(' + c2 + '))';
	else if(navigateur == NAV_FIREFOX)
		return '-moz-linear-gradient(center top , ' + c1 + ', ' + c2 + ' 90%)';
	else
		return c1;
}