const redefinePassword = (pass) =>{
    const emailBody = `<p>Ol&aacute;, tudo bem? Espero que sim!😀</p><p>Esta senha &eacute; temporaria, use ela para logar no sistema e alterar definitivamente sua senha...</p><p><strong>Senha: ${pass}</strong></p><p>&nbsp;</p><p>Abra&ccedil;o!</p>`
    return emailBody
}



module.exports = {redefinePassword}