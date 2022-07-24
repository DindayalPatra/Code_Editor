// function compile() {
//   var html = document.getElementById('html');
//   var css = document.getElementById('css');
//   var js = document.getElementById('js');
//   var code = document.getElementById('code').contentWindow.document;

//   document.body.onkeyup = function () {
//     code.open();
//     code.writeln(
//       html.value +
//         '<style>' +
//         css.value +
//         '</style>' +
//         '<script>' +
//         js.value +
//         '</script>'
//     );
//     code.close();
//   };
// }

// //compile();
// document.getElementById('btn').addEventListener('click', compile);

function run() {
  var htmlCode = document.getElementById('html').value;
  var cssCode = '<style>' + document.getElementById('css').value + '</style>';
  var jsCode = '<script>' + document.getElementById('js').value + '</script>';
  var iFrame = document.getElementById('code').contentWindow.document;
  iFrame.open();
  iFrame.write(htmlCode + cssCode + jsCode);
  iFrame.close();
}

document.getElementById('btn').addEventListener('click', run);
