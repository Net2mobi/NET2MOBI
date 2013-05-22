<?php
/**
*	This program incorporates work covered by the following copyright and
*	permission notices:
*
*	Net2mobi CMS is (c) 2011, 2012 Net2mobi Ltd - cms@net2mobi.net -
*	http://net2mobi.net
*	Net2mobi CMS is released under the GPL
*
*	and
*
*	Net2mobi CMS - Mobile web & Mobile app builder
*	Copyright 2013 by the contributors
*	Net2mobi CMS is released under the GPL
*
*/
?>

<h3>Add new Template</h3>
<?php echo validation_errors(); ?>
<?php if($this->session->flashdata('message')){echo $this->session->flashdata('message');}?>
<?php             
    //echo form_open('template/add_new_entry');
	
?>
<form accept-charset="utf-8" enctype="application/x-www-form-urlencoded">
<table>
    <tr>
        <td><label for="title">Title:</label></td>
        <td><input type="text" name="title" class="net2-text"></td>
    </tr>
    <tr>
        <td><label for="img">Image:</label></td>
        <td><input type="text" name="img" class="net2-text" style="float:left" /><iframe src="script/imagemanager/pages/im/upload.html" style="margin-top:-1px;border:none;height:29px"></iframe></td>
    </tr>
	<tr>
        <td id="info" colspan="2" style="text-align:right;font-size:12px;font-family:arial;"></td>
    </tr>
    <tr>
        <td><label label for="description">Description:</label></td>
        <td><textarea name="description" rows="5" cols="50" style="resize:none;height: 75px;" class="net2-textarea"></textarea></td>
    </tr>
    <tr>
        <td><label for="type">Type:</label> </td>
        <td>
            <select name="type" class="custom_select">
                <option value="free" selected="">Free</option>
                <option value="basic" selected="">Basic</option>
                <option value="payant" selected="">Payant</option>
            </select>  
        </td>
    </tr>
    <tr>
        <td><label for="rating">Rating:</label></td>
        <td><input type="text" name="rating" class="net2-text"/></td>
    </tr>
    <tr>
        <td><label for="price">Price:</label></td>
        <td><input type="text" name="price" class="net2-text"/></td>
    </tr>
</table>
<textarea style="display:none" name="html"></textarea>
<script type="text/javascript">
$(function(){
    //save template
    $('.custom_input_file').each(function(){
        var val = $(this).find('input').val();
        if(val=="")
            val="No file chosen...";
        $(this).find('.value_custom_input_file').html(val);
    });
    $('select').wrap('<div class="bg_select"></div>');
    $('select').selectmenu();
})    
</script>
<!--<input type="submit" value="Enregistrer" id="id_save_tpl" style="display: none"/>-->
<?php echo form_close();?>
