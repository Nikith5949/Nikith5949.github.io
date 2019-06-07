<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Nikiths site</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	<script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
	
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
   
</head>
<body>
	
<div class="container">
<h2>Please fill this up to Send:- </h2>
<form method="POST" action="b.php">

<div class="form-group">
<label>Subject :</label>
<input type="text" class="form-control form-control-sm" name="subject"  class="form-control" required>

</div>
<div class="form-group">
<label>Body :</label>
<textarea class="form-control" rows="5" id="comment" name="body" required>
</textarea>
</div>

<div class="form-group">
<label>Your Email id:</label>
<input type="email" class="form-control form-control-sm" name="email"  class="form-control" required>

</div>
   <input type="submit" class="btn btn-primary" name="textsub" value="submit">

 
  
</form>
</div>
</body>
</html>