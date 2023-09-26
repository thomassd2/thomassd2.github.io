
var language;
(localStorage.getItem('language') == null) ? setLanguage('en') : false;
$.ajax({ 
    url:  '/language/' +  localStorage.getItem('language') + '.json', 
    dataType: 'json', async: false, dataType: 'json', 
    success: function (lang) { language = lang } });

export function setLanguage(lang) {
    localStorage.setItem('language', lang);
    }

export default language;