<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $text = trim($_POST['textInput']);

    if (!empty($text)) {
        $file = 'submits.txt';
        file_put_contents($file, $text . PHP_EOL, FILE_APPEND | LOCK_EX);
        echo "Text submitted successfully!";
    } else {
        echo "Please enter some text before submitting.";
    }
} else {
    echo "Invalid request method.";
}
?>
