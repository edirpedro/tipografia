
<!DOCTYPE html>

<html>
<head>
	<meta charset="utf-8">
	<title>Tipografia</title>
	
	<link rel="stylesheet" href="reset.css">
	<link rel="stylesheet" href="screen.css">
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
	<script src="script.js"></script>
	<script>
		Tipografia.version_css = <?= filemtime("elementos.css") ?>;
		Tipografia.version_html = <?= filemtime("elementos.html") ?>;
	</script>
</head>

<body>

<style id="tipografia"></style>

<div id="editor">	
	<h1>Tipografia</h1>
	<form>
		<p><label for="css">CSS:</label><br>
			<textarea id="css" cols="50" rows="20">
<?= file_get_contents("elementos.css"); ?>
			</textarea></p>
	
		<p>
			<input type="reset" id="reset" value="Reset">
			<input type="button" id="refresh" title="Ctrl + Shift" alt="Ctrl + Shift" value="Refresh">
		</p>
		
		<p><label for="html">HTML:</label><br>
		<textarea id="html" cols="50" rows="5">
<?= str_replace('<meta charset="utf-8">', '', file_get_contents("elementos.html")); ?>
		</textarea></p>
	</form>

	<ul class="info">
		<li>Ctrl + Shift para dar refresh</li>
	</ul>
</div>	


<div id="texto"></div>
<div style="clear: both;"></div>

</body>
</html>
