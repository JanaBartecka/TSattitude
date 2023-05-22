let currentYear=document.querySelector('.currentYear')
let GetDnesniDatum=new Date()

if (GetDnesniDatum.getFullYear()==2023) {
    currentYear.innerHTML=GetDnesniDatum.getFullYear()
} else {
    currentYear.innerHTML='2023 - ' + GetDnesniDatum.getFullYear()
}