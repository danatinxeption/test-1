import NavBar from 'components/NavBar'
import HeaderTitle from 'components/HeaderTitle'

const Content = (props) => {
    return (
        <div className="page">
            <NavBar />
            <section className="container">
                <div className="row">
                    <HeaderTitle />
                </div>
                <div className="content margins center-text">
                    <h2>Donec a quam.</h2>
                    <p>
                        Nam dictum augue a est consequat, sed egestas metus tempor. Pellentesque dictum, neque nec blandit pharetra, sem diam aliquam mi, ut feugiat odio dui sed lectus. Suspendisse pharetra eros sed risus consequat pretium. Suspendisse quis magna non lectus rutrum molestie. Ut eleifend nibh rutrum auctor porttitor. Etiam efficitur orci et molestie fringilla. Maecenas finibus nisl metus, pellentesque sollicitudin libero pellentesque quis. Suspendisse potenti. Donec quam ante, viverra et semper vel, sodales sed ligula. Morbi id hendrerit tellus, a suscipit nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas ultrices nisi, at congue massa ornare sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed urna nulla, ornare in lacus eget, faucibus vestibulum augue. Sed quis molestie leo. Suspendisse potenti. Integer ultrices mauris ipsum, ac blandit urna euismod a.
                    </p>
                </div>
                <div className="content margins green-background">
                    <h2>Nullam semper, odio.</h2>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vehicula felis eget tortor porttitor pellentesque. Vestibulum id finibus magna. Fusce imperdiet faucibus ex. Nam ac consectetur quam. Morbi vel laoreet erat, sed consectetur purus. Nam et tellus viverra massa venenatis mattis eget vitae lorem. Vestibulum vulputate nunc purus, sit amet hendrerit diam interdum eu. Praesent dolor tortor, condimentum ac tortor non, eleifend rutrum magna. Aliquam faucibus sem mi, ac accumsan enim congue vel.
                        Suspendisse lacinia euismod neque, sit amet faucibus metus. Aliquam orci sapien, bibendum vel ornare id, egestas nec magna. Maecenas consequat turpis justo, id lacinia arcu malesuada eu. Nunc pellentesque felis venenatis, tristique sapien at, dapibus augue. Sed egestas, massa at sagittis euismod, sapien ipsum ornare magna, sed convallis mi justo porta ex. Suspendisse non sem id arcu pretium facilisis accumsan eget ipsum. Cras mattis aliquam arcu, quis venenatis erat. Donec eu aliquet odio, quis imperdiet augue. Duis at molestie augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque elementum lacinia tellus in cursus. Maecenas pellentesque risus ac eros pellentesque, at tempor mi posuere.
                        Aenean euismod eu sem vitae consectetur. Maecenas sed turpis ut massa iaculis condimentum. Maecenas luctus dignissim sollicitudin. Maecenas sapien augue, blandit vitae dui non, dapibus ultrices purus. Nunc aliquet blandit nulla, id porttitor mi. Vestibulum quis tortor purus. Mauris fringilla lacinia porttitor.
                    </p>
                </div>
                <div className="row margins lighter-green-background">
                    <div className="grid">
                        <div className="center">
                            <h2>Aliquam imperdiet, lectus a malesuada facilisis, urna.</h2>
                            <h3>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi.</h3>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam nec ante pellentesque, fermentum leo gravida, semper justo. Sed et leo magna. Ut fringilla interdum augue.</p>
                            <p className="two-column">Nunc porta diam vitae orci pharetra, eget pellentesque metus condimentum. Nunc eget purus ac leo volutpat viverra quis non enim. Vivamus venenatis ligula a mauris mattis, non porta eros pharetra. Praesent malesuada libero sit amet tristique faucibus. Nunc dictum eu quam a sodales. Cras eu ipsum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            <p>Sed eget cursus elit. Aenean ac interdum leo, nec imperdiet lacus. Curabitur convallis ipsum et vestibulum faucibus. Quisque ac blandit risus. Phasellus sit amet ex luctus, bibendum elit nec, porta.</p>
                        </div>
                    </div>
                </div>
                <div className="row margins center-text brown-background">
                    <div className="grid">
                        <div className="center">
                            <h2>Quisque auctor tempor sapien, eget luctus enim sagittis id.</h2>
                            <p>Praesent orci nisl, lacinia eget tellus eget, tempor lacinia diam. Aliquam fringilla maximus ante. Donec nec sagittis est. Vivamus non tincidunt.</p>
                        </div>
                    </div>
                </div>
                <footer className="row margins footer">
                    <div className="grid">
                        <div className="center">
                            COPYRIGHT © 2020, GENERAL COMPANY, ALL RIGHTS RESERVED.
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Content