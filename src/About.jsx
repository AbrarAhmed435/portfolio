export default function About(){
    return (
        <div>
        <div className="about-container">
                       <h1>About me</h1>
                       <p>I'm <strong>Abrar Ul Riyaz</strong> a passionate and curious developer pursuing my B-Tech in <strong>Information Technology</strong> from <strong>Natinal Institute of Technology, Sringar</strong></p>
                       <p>I enjoy solving real-word problems through code and i am trying to Learning new Technology every Day</p>
                       
        </div>
        
            <h1 className="history-title">HISTORY</h1>
            <section className="history-item">
                <div className="history-text">
                <h2 style={{textDecoration:'underline'}}>B-Tech {"  "}(IT)</h2>
                <h4>National Institue of Technology</h4>
                <p>Srinagar, J&K</p>
                </div>
                <div className="history-image">
                <img src="undraw_hello_ccwj.svg" alt="Early School" />
               </div>
            </section>
            <section className="history-item">
                <div className="history-text">
                <h2 style={{textDecoration:'underline'}}>Secondary Schooling</h2>
                <h4>Nigeen Higher Secondary🎒</h4>
                <p>Hazratbal, Srinagar</p>
                </div>
                <div className="history-image">
                <img src="undraw_book-writer_ri5u.svg" alt="Early School" />
               </div>
            </section>
            <section className="history-item">
                <div className="history-text">
                <h2 style={{textDecoration:'underline'}}>Middle Schooling</h2>
                <h4>Vijay Memorial Educational Institue🎒</h4>
                <p>Beehama Ganderbal</p>
                </div>
                <div className="history-image">
                <img src="undraw_junior-soccer_0lib.svg" alt="Early School" />
               </div>
            </section>
            <section className="history-item">
                <div className="history-text">
                <h2 style={{textDecoration:'underline'}}>Primiary School</h2>
                <h4>Abu Baker Model School🎒</h4>
                <p>Busser Bugh Alastang</p>
                </div>
                <div className="history-image">
                <img src="early_school.svg" alt="Early School" />
               </div>
            </section>
            <div className="about-end">Start</div>
        </div>
        
    )
}