<!DOCTYPE html>
<html>
<head>
    <title>Fancify Shamcify</title>
    <!-- Link to your script file here -->
    <script src="fancifymytext.js" defer></script>
    <style>
        fieldset {
            border: 2px solid #000;
            padding: 10px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Fancify my Text</h1>

    <fieldset>
        <legend>Text</legend>
        <textarea id="textArea" rows="4" cols="30"></textarea>
    </fieldset>

    <fieldset>
        <legend>Fancify</legend>
        <button id="biggerButton">Bigger!</button>
        <br>
        <input type="radio" id="fancy" name="style" value="fancy">
        <label for="fancy">FancyShmancy</label>
        <br>
        <input type="radio" id="boring" name="style" value="boring">
        <label for="boring">BoringBetty</label>
        <br>
        <button id="mooButton">Moo</button>
    </fieldset>
</body>
</html>
