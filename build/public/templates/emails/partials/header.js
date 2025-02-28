
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<!DOCTYPE html>\n<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">\n<head>\n<meta charset=\"utf-8\"> <!-- utf-8 works for most cases -->\n<meta name=\"viewport\" content=\"width=device-width\"> <!-- Forcing initial-scale shouldn't be necessary -->\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> <!-- Use the latest (edge) version of IE rendering engine -->\n<meta name=\"x-apple-disable-message-reformatting\">  <!-- Disable auto-scale in iOS 10 Mail entirely -->\n<title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->\n<!-- Web Font / @font-face : BEGIN -->\n<!-- NOTE: If web fonts are not required, lines 10 - 27 can be safely removed. -->\n<!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->\n<!--[if mso]>\n<style>\n* {\nfont-family: sans-serif !important;\n}\n</style>\n<![endif]-->\n<!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->\n<!--[if !mso]><!-->\n<!-- insert web font reference, eg: <link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'> -->\n<!--<![endif]-->\n<!-- Web Font / @font-face : END -->\n<!-- CSS Reset -->\n<style>\n/* What it does: Remove spaces around the email design added by some email clients. */\n/* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */\nhtml,\nbody {\nmargin: 0 auto !important;\npadding: 0 !important;\nheight: 100% !important;\nwidth: 100% !important;\n}\n/* What it does: Stops email clients resizing small text. */\n* {\n-ms-text-size-adjust: 100%;\n-webkit-text-size-adjust: 100%;\n}\n/* What it does: Centers email on Android 4.4 */\ndiv[style*=\"margin: 16px 0\"] {\nmargin:0 !important;\n}\n/* What it does: Stops Outlook from adding extra spacing to tables. */\ntable,\ntd {\nmso-table-lspace: 0pt !important;\nmso-table-rspace: 0pt !important;\n}\n/* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */\ntable {\nborder-spacing: 0 !important;\nborder-collapse: collapse !important;\ntable-layout: fixed !important;\nmargin: 0 auto !important;\n}\ntable table table {\ntable-layout: auto;\n}\n/* What it does: Uses a better rendering method when resizing images in IE. */\nimg {\n-ms-interpolation-mode:bicubic;\n}\n/* What it does: A work-around for email clients meddling in triggered links. */\n*[x-apple-data-detectors],\t/* iOS */\n.x-gmail-data-detectors, \t/* Gmail */\n.x-gmail-data-detectors *,\n.aBn {\nborder-bottom: 0 !important;\ncursor: default !important;\ncolor: inherit !important;\ntext-decoration: none !important;\nfont-size: inherit !important;\nfont-family: inherit !important;\nfont-weight: inherit !important;\nline-height: inherit !important;\n}\n/* What it does: Prevents Gmail from displaying an download button on large, non-linked images. */\n.a6S {\ndisplay: none !important;\nopacity: 0.01 !important;\n}\n/* If the above doesn't work, add a .g-img class to any image in question. */\nimg.g-img + div {\ndisplay:none !important;\n}\n/* What it does: Prevents underlining the button text in Windows 10 */\n.button-link {\ntext-decoration: none !important;\n}\n/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */\n/* Create one of these media queries for each additional viewport size you'd like to fix */\n/* Thanks to Eric Lepetit (@ericlepetitsf) for help troubleshooting */\n@media only screen and (min-device-width: 375px) and (max-device-width: 413px) { /* iPhone 6 and 6+ */\n.email-container {\nmin-width: 375px !important;\n}\n}\n</style>\n<!-- Progressive Enhancements -->\n<style>\n/* What it does: Hover styles for buttons */\n.button-td,\n.button-a {\ntransition: all 100ms ease-in;\n}\n.button-td:hover,\n.button-a:hover {\nbackground: #555555 !important;\nborder-color: #555555 !important;\n}\n/* Media Queries */\n@media screen and (max-width: 600px) {\n/* What it does: Adjust typography on small screens to improve readability */\n.email-container p {\nfont-size: 17px !important;\nline-height: 26px !important;\n}\n}\n.notification-body img {\nmax-width: 100%;\nheight: auto;\n}\n</style>\n<!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->\n<!--[if gte mso 9]>\n<xml>\n<o:OfficeDocumentSettings>\n<o:AllowPNG/>\n<o:PixelsPerInch>96</o:PixelsPerInch>\n</o:OfficeDocumentSettings>\n</xml>\n<![endif]-->\n</head>\n<body width=\"100%\" bgcolor=\"#f6f6f6\" style=\"margin: 0; mso-line-height-rule: exactly;\">\n<center style=\"width: 100%; background: #f6f6f6; text-align: left;\">\n<!--\nSet the email width. Defined in two places:\n1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 600px.\n2. MSO tags for Desktop Windows Outlook enforce a 600px width.\n-->\n<div style=\"max-width: 600px; margin: auto;" + 
      (guard((context != null) ? context['rtl'] : null) ?
        " text-align: right; direction: rtl;" :
        "") + 
      "\" class=\"email-container\">\n<!--[if mso]>\n<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"600\" align=\"center\">\n<tr>\n<td>\n<![endif]-->\n<!-- Email Header : BEGIN -->\n<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 600px;\">\n<tr>\n<td style=\"padding: 20px 0; text-align: center\">\n" + 
      (guard((context != null && context['logo'] != null) ? context['logo']['src'] : null) ?
        "\n<img src=\"" + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['src'] : null)) + 
          "\" height=\"auto\" width=\"" + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['width'] : null)) + 
          "\" alt=\"" + 
          __escape(guard((context != null) ? context['site_title'] : null)) + 
          "\" border=\"0\" style=\"height: auto; width: " + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['width'] : null)) + 
          "px; background: #f6f6f6; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #333333;\">\n" :
        "\n&nbsp;\n") + 
      "\n</td>\n</tr>\n</table>\n<!-- Email Header : END -->";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
