function drawTable(id)
{
  var content = document.getElementById(id).innerHTML;
  document.getElementById(id).innerHTML = '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse!important">\
  <tbody>\
    <tr>\
      <td align="right" width="" style="border-collapse:collapse!important"><br><br>\
      </td>\
      <td style="background-color:rgb(247,248,248);border-collapse:collapse!important"><br><br>\
      </td>\
    </tr>\
    <tr>\
      <td align="right" valign="top" style="width:65px;border-collapse:collapse!important">\
          <table border="0" cellpadding="0" cellspacing="0" height="20" style="background-color:rgb(139,173,26);border-collapse:collapse!important">\
              <tbody><tr>\
                  <td align="center" valign="middle" style="border-collapse:collapse!important">\
                      <img src="http://gallery.mailchimp.com/27aac8a65e64c994c4416d6b8/images/tab_screen.png" height="20" width="20" style="display:block;border:0px;line-height:100%;outline:none;text-decoration:none">\
                    </td>\
                    <td width="45" style="border-collapse:collapse!important">\
                      <br>\
                    </td>\
                </tr>\
            </tbody></table>\
        </td>\
        <td align="left" valign="top" style="width:515px;border-collapse:collapse!important">\
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:rgb(247,248,248);border-collapse:collapse!important">\
              <tbody>\
                <tr>\
                  <td align="left" valign="top" style="border-collapse:collapse!important">\
                      <table border="0" cellpadding="0" cellspacing="0" width="20" style="background-color:rgb(139,173,26);border-collapse:collapse!important">\
                          <tbody><tr>\
                              <td width="20" style="border-collapse:collapse!important">\
                                  <br>\
                                </td>\
                            </tr>\
                        </tbody></table>\
                    </td>\
                    <td align="left" valign="top" style="border-collapse:collapse!important">\
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse!important">\
                          <tbody>\
                            <tr>\
                              <td valign="top" style="color:rgb(52,58,63);font-family:Helvetica;font-size:14px;line-height:150%;padding-top:0px;padding-right:40px;padding-left:20px;text-align:left;padding-bottom:10px!important;border-collapse:collapse!important">\
                              ' + content + '\
                              </td>\
                            </tr>\
                        </tbody>\
                      </table>\
                    </td>\
                  </tr>\
            </tbody>\
          </table>\
        </td>\
    </tr>\
</tbody></table>';
}
