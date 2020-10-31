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
                {/* <div className="content">
                    <HeaderTitle />
                </div> */}
                <div className="content">
                    <div className="">
                        <h2>Hola mundo</h2>
                        <div>Text</div>
                    </div>
                </div>
                <div className="row">
                    <div className="grid">
                        <div className="center">
                            <h2>Hola mundo</h2>
                            <div>Text</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Content