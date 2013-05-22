/*
	This program incorporates work covered by the following copyright and permission notices:

	Net2mobi CMS is (c) 2011, 2012 Net2mobi Ltd - cms@net2mobi.net - http://net2mobi.net
	Net2mobi CMS is released under the GPL
 
	and

	Net2mobi CMS - Mobile web & Mobile app builder
	Copyright 2013 by the contributors
	Net2mobi CMS is released under the GPL
*/
  
dragState = 0; mouseY = 0; scroll = 0;
editorSave = "";
//div apercu emplacement du drop
dropHelper = '<div id="dropHelper" ></div>';
//div permettant de glisser-deposer un composant avec bouton supprimer
sortHandler = '<div class="net2-sort-handler"><div class="net2-suppr"></div></div>';
//model de page
pageCode = '<div data-role="page" data-ajax="false" net2natif><div data-role="content" net2natif></div></div>';

$(document).ready(function(){
	parent.generateCommonConfigEditor(); 

	//sortable de la premiere page
	bindSortable("page_1");
	 
	//initialiser la liste des pages
	parent.refreshPageListe("page_1");
	
	//selection composant pour edition
	$(".net2-sort-handler").live("click", function(e) {
            
		if(!$(this).parent().is(".selected"))
		{
			var t = $(this);
			$(".net2-composant").removeClass("selected");
			$(this).parent().addClass("selected");
			parent.$("#loading-editor").show();
			setTimeout(function(){
                            parent.editComposant(t.parent().attr("id"));
                        }, 1);
		}
            
	});
	
	//suppression composant
	$(".net2-suppr").live("click", function(e){
		e.stopPropagation();
		$(this).closest(".net2-composant").remove();
	});
	
	$("[data-role=page]").live('pageshow', function(event, data){
		console.log(data.prevPage.data("net2-become")); 
		if(!!data.prevPage.data("net2-become"))
		{
			if(data.prevPage.data("net2-become") == "visualisation")
				performVisualisation();
			else if(data.prevPage.data("net2-become") == "edition")
				performEdition();
				
			data.prevPage.removeData("net2-become");
		}
	});
});

function reEdit(elem)
{
	$(elem).trigger("click");
}

//sortable des composants
function bindSortable(id)
{
	$("#" + id + " div[data-role=content]").sortable({
		items: "div.net2-composant",
		placeholder: "placeholder",
		axis : 'y',
		forcePlaceholderSize: true,
		scroll:true,
		handle: ".net2-sort-handler"
	});
}

//se prepare a deposer dans l'iframe
function activateSort(mY, s)
{
	dragState = 1;
	$(dropHelper).prependTo(".ui-page-active div[data-role=content]");
	mouseY = mY; scroll = s;
	moveHelper();
	
}

//annuler le glisser deposer
function cancelSort()
{
	$("#dropHelper").remove();
	dragState = 0;
}

//fired when a component is dropped
function acceptDrop(type, comp)
{
	var res = "";
	$("<span id='divToReplace' style='width:100%'></span>").insertAfter($("#dropHelper"));
	cancelSort();
	$("#divToReplace").replaceWith(comp.build());
	res = $("#" + comp.data.id).prepend(sortHandler).trigger('create');
	bindMouseEvent(res.find(".net2-sort-handler"));
	res.find('a').each(function(){$(this).find('span.ui-btn-text').each(function(){ $(this).attr('net2natif', 'net2natif'); });});
	res.find('a[data-role=button]').each(function(){$(this).find('span').each(function(){ $(this).attr('net2natif', 'net2natif'); });});
	// res.find('label').each(function(){$(this).find('.ui-btn-text span').each(function(){ $(this).attr('net2natif', 'net2natif'); });});
	return res;
}

//animation on hover composant
function bindMouseEvent(handler)
{
	handler.bind("mouseenter", function(){
		
		$(this).find(".net2-suppr").stop().fadeTo(300, 1);
	});
	handler.bind("mouseleave", function(){
		
		$(this).find(".net2-suppr").stop().fadeTo(300, 0);
	});
}

//update icone
function setIcone(url)
{
	$("#net2-icon").attr("href", url).removeAttr("net2remove");
}

//update params: title, description, keywords
function setParams(obj)
{
	obj = $.extend({
		title:$("title").html(),
		description:$("meta[name=description]").attr("content"),
		keywords:$("meta[name=keywords]").attr("content")
	}, obj);
	console.log(obj);
	$("title").html(obj.title).removeAttr("net2remove");
	$("meta[name=description]").attr("content", obj.description).removeAttr("net2remove");
	$("meta[name=keywords]").attr("content", obj.keywords).removeAttr("net2remove");
}

//retrieve params
function getParams()
{
	return {
			title:$("title").html(),
			description:$("meta[name=description]").attr("content"),
			keywords:$("meta[name=keywords]").attr("content")
		};
}

//sortable du dropHelper
function moveHelper()
{
	$(".ui-page-active .net2-composant").each(function(){
		compY = $(this).offset().top - scroll;
		compH = $(this).height();
		middle = ($(this).offset().top - scroll) + ($(this).height() / 2);
		if(mouseY < middle && mouseY > compY && !$(this).prev().is("#dropHelper"))
		{
			$("#dropHelper").insertBefore($(this)); return false;
		}
		else if(mouseY > middle && mouseY < compY + compH && !$(this).next().is("#dropHelper"))
		{
			$("#dropHelper").insertAfter($(this)); return false;
		}
	});
	if(dragState == 1) setTimeout(moveHelper, 30);
}

//basculer en mode edition
function activateEdition()
{	
	simulateLoading();
	if($($("div[data-role=page]")[0]).attr("id") != $(".ui-page-active").attr("id"))
	{
		$(".ui-page-active").data("net2-become", "edition");
		$.mobile.changePage("#" + $($("div[data-role=page]")[0]).attr("id"));
	}
	else
		performEdition();
}
function performEdition()
{
	$("[data-role=page]").removeClass("ui-page-active");
	$(".net2-composant").attr("net2natif", "net2natif");
	
	clone = $("[data-role=page]").clone();
	$("[data-role=page]").detach();
	
	while(clone.find(":not([net2natif])").length > 0)
	{
		actuel = $(clone.find(":not([net2natif])")[0]);
		if(actuel.find("[net2natif]").length > 0) actuel.replaceWith(actuel.contents());
		else actuel.remove();
	}
	clone.find(".net2-composant").removeAttr("net2natif").each(function(){$(this).prepend(sortHandler);});
	
	$("body").append(clone);
	$.mobile.initializePage();
	
	$("[data-role=page]").each(function(){bindSortable($(this).attr("id"));});
	parent.refreshPageListe($($("[data-role=page]")[0]).attr("id"));
}

//basculer en mode visualisation
function activateVisualisation()
{
	simulateLoading();
	if($($("div[data-role=page]")[0]).attr("id") != $(".ui-page-active").attr("id"))
	{
		$(".ui-page-active").data("net2-become", "visualisation");
		$.mobile.changePage("#" + $($("div[data-role=page]")[0]).attr("id"));
	}
	else
		performVisualisation();

}
function performVisualisation()
{
	$("div[data-role=content]").sortable("destroy");
	$("[data-role=page]").removeClass("ui-page-active");
	$(".net2-composant").attr("net2natif", "net2natif").removeClass("selected");
	
	clone = $("[data-role=page]").clone();
	$("[data-role=page]").detach();
	
	while(clone.find(":not([net2natif])").length > 0)
	{
		actuel = $(clone.find(":not([net2natif])")[0]);
		if(actuel.find("[net2natif]").length > 0) actuel.replaceWith(actuel.contents());
		else actuel.remove();
	}
	$(".net2-composant").removeAttr("net2natif");
	
	$("body").append(clone);
	//$("[data-role=page]").page();
	$.mobile.initializePage();
}

//recreate component after adding item
function refreshComposant(){
	$(".ui-page-active [data-role=listview]").listview("refresh");
	$("select").selectmenu("refresh");
	
}

//simulation transition entre edition et preview et changePage
function simulateLoading()
{
	$("#net2-loading").fadeIn(200);
	setTimeout(function(){
		$("#net2-loading").fadeOut(200);
	}, 1000);
}

//PAGE_ID generator
function generatePageId()
{
	nb = 0;
	$("[data-role=page]").each(function(){
		s = $(this).attr("id").split("_");
		if(s.length == 2 && s[0] == "page" && !isNaN(parseInt(s[1])))
			nb = Math.max(nb, parseInt(s[1]));
	});
	return "page_" + (++nb);
}

//PAGE_INDEX generator
function generatePageIndex()
{
	nb = 0;
	$("[data-role=page]").each(function(){
		nb = Math.max(nb, parseInt($(this).attr("net2-index")));
	});
	return (++nb);
}

//creation d'une nouvelle page
function newPage()
{
	simulateLoading();
	id = generatePageId();
	$("body").append($(pageCode).attr("id", id).attr("data-url", id).attr("net2-index", generatePageIndex()));
	$.mobile.changePage($("#" + id));
	$(".net2-composant").removeClass("selected");
	bindSortable(id);
	parent.refreshPageListe(id);
}

//suppression d'une page
function deletePage(id)
{
	if(!!!id) id = $(".ui-page-active").attr("id");
	simulateLoading();
	index = ($($("[data-role=page]")[0]).attr("id") == id)? 1 : 0;
	if($(".ui-page-active").attr("id") == id) $($("[data-role=page]")[index]).addClass("ui-page-active");
	$("#" + id).remove();
	parent.refreshPageListe($(".ui-page-active").attr("id"));
}

//definition page accueil
function updateHomepage(id)
{
	if(!!!id) id = $(".ui-page-active").attr("id");
	$("#" + id).insertBefore($($("[data-role=page]")[0]));
	parent.refreshPageListe($(".ui-page-active").attr("id"));
}

//selection page
function changePage(id)
{
	simulateLoading();
	$.mobile.changePage($("#" + id));
	$(".net2-composant").removeClass("selected");
	parent.refreshPageListe(id);
}

//renommage page
function renamePage(actuel, nouveau)
{
	if(actuel != nouveau && $("#" + nouveau).length > 0) return false;
	
	$("#" + actuel).attr("id", nouveau).attr("data-url", nouveau);
	parent.refreshPageListe($(".ui-page-active").attr("id"));
	return true;
}

//renvoie la liste des pages
function getPageList()
{
	var tab = new Array();
	$("[data-role=page]").each(function(idx){
		tab[parseInt($(this).attr("net2-index"))] = {
			name: $(this).attr("id"),
			accueil: (idx == 0)? true : false
		};
	});
	
	return tab;
}