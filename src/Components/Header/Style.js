import style from 'styled-components'

/*container que pega toda header*/
export const ContainerHeader = style.section`

    width: 100%;
    margin: 0auto;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    background-color: #E6EDD0;
`

export const ContainerFigureTitle = style.section`

    width: 50%;
    margin: 0auto;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    background-color: blue;

`

/*box da logo na header*/
export const FigureHeader = style.figure`

    width: 20%;
    margin: 0auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: grey;
`
/*Logo da Header*/
export const LogoHeader = style.img`

    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: none;
`


/*caixa do título*/
export const BoxTitleHeader = style.div`

    width: 40%;
    margin: 0auto;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: magenta;
`
/*título da header*/
export const TitleHeader = style.h1`

    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 13pt;

`

/*navegação dos links e botão de menu da header*/
export const Navigation = style.nav`

    width: 50%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: cyan;
`
/*caixa das listas de links*/
export const ListLinks = style.ul`
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
`


/*caixa do botão header*/
/* export const BoxButton = style.div`

    width: 100%;
    display: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: purple;
` */
/*botão de menu*/
/* export const ButtonMenu = style.button`

    width: 50%;
    display: none;
    text-align: center;
    align-items: center;
` */