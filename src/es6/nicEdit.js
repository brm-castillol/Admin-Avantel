tinymce.init({
  selector: "textarea",
  block_formats: 'Títulos=h1;Subtítulos=h2;Texto=p',
  height: 450,
  plugins: [
    "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak",
    "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
    "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"
  ],
  toolbar: 'fontselect',
  font_formats: 'Lato=//fonts.googleapis.com/css?family=Lato:300i,400,400i,700,900',
  toolbar1: "newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
  toolbar2: "cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | insertdatetime preview | forecolor backcolor",
  toolbar3: "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | visualchars visualblocks nonbreaking template pagebreak restoredraft",
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,900',
    '//www.tinymce.com/css/codepen.min.css'],

  menubar: false,
  toolbar_items_size: 'small',

  style_formats: [{
    title: 'Bold text',
    inline: 'b'
  }, 

  {
    title: 'Titulos',
    block: 'h2',
    styles: { 
      'font-weight': '700',
      'text-transform': 'uppercase',
      color: '#000',
      'font-family': 'Lato' }
  }, 

  {
    title: 'Titulos Magenta',
    block: 'h2',
    styles: { 
      'font-weight': '700',
      'text-transform': 'uppercase',
      color: '#ec008c',
      'font-family': 'Lato' }
  },

  {
    title: 'Subtitulos',
    block: 'h4',
    styles: { 
      'font-weight': '300',
      'text-transform': 'uppercase',
      color: '#7f7f7f',
      'font-family': 'Lato' }
  },

  {
    title: 'Texto',
    block: 'p',
    styles: {
      'font-weight': '300',
      color: '#4b4b4c',
      'font-family': 'Lato',
      'font-size': '16px'
    }
  }, 

  {
    title: 'Texto descripción',
    block: 'p',
    styles: {
      'font-weight': '300',
      color: '#7f7f7f',
      'font-family': 'Lato',
      'font-size': '14px'
    }
  },
],

  templates: [{
    title: 'Test template 1',
    content: 'Test 1'
  }, {
    title: 'Test template 2',
    content: 'Test 2'
  }],
  
  init_instance_callback: function () {
    window.setTimeout(function() {
      $("#div").show();
     }, 1000);
  }
});
