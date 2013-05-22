<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=<?php echo $this->config->item('charset'); ?>" />
	<title>Net2mobi - Homepage</title>

	<script type="text/javascript" src="script/ajaxupload.js"></script>
</head>

<body>
	<form onSubmit="return disableForm(this);" action="<?php echo base_url(); ?>index.php/upload/do_upload'" method="post" name="upload_form" id="upload_form" enctype="multipart/form-data">
		<input type="file" name="uploadFile" />
		<input type="button" value="Envoyer" onclick="return disableForm(this), ajaxUpload(this.form, '<?php echo base_url(); ?>index.php/upload/do_upload', 'UPLOAD1'); return false;" />
	</form>
	
	<form onSubmit="return disableForm(this);" action="<?php echo base_url(); ?>index.php/upload/do_upload'" method="post" name="upload_form" id="upload_form" enctype="multipart/form-data">
		<input type="file" name="uploadFile" />
		<input type="button" value="Envoyer" onclick="return disableForm(this), ajaxUpload(this.form, '<?php echo base_url(); ?>index.php/upload/do_upload', 'UPLOAD2'); return false;" />
	</form>
	</body>
	
	<div id="UPLOAD1" style="background-color:#0000CC"></div>
	<div id="UPLOAD2" style="background:#99CC00"></div>
</html>
