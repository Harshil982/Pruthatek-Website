import '../vars.css';
import '../CashStudies/CashStudiesCSS.css';

function CashStudies(){
    /*  Main Images */
    const imageSource = [
        {
            img: 'Pictures/img1.png',
        },
        {
            img: 'Pictures/img2.png',
        },
        {
            img: 'Pictures/img3.png',
        },
        {
            img: 'Pictures/img4.png',
        },
        {
            img: 'Pictures/img5.png',
        },
        {
            img: 'Pictures/img6.png',
        },
        {
            img: 'Pictures/img7.png',
        },
        {
            img: 'Pictures/img8.png',
        },
    ]

    const images = imageSource.map( (item,index) => {
        return(
            <img src={item.img} alt='ImageHere' key={index}/>
        );
    })

    /*  Hovering Images gets colored up */
    const hoverImg = [
        {
            img: 'Pictures/nike.png',
            img_black: 'Pictures/nike-black.png'
        },
        {
            img: 'Pictures/pti.png',
            img_black: 'Pictures/pti-black.png'
        },
        {
            img: 'Pictures/aerofusion.png',
            img_black: 'Pictures/aerofusion-black.png'
        },
        {
            img: 'Pictures/aurum.png',
            img_black: 'Pictures/aurum-black.png'
        },
        {
            img: 'Pictures/bio.png',
            img_black: 'Pictures/bio-black.png'
        },
        {
            img: 'Pictures/hexabyts.png',
            img_black: 'Pictures/hexabyts-black.png'
        },
        {
            img: 'Pictures/archfin.png',
            img_black: 'Pictures/archfin-black.png'
        },
        {
            img: 'Pictures/pramukh.png',
            img_black: 'Pictures/pramukh-black.png'
        },
        {
            img: 'Pictures/aph.png',
            img_black: 'Pictures/aph-black.png'
        }
    ];

    const blackImages = hoverImg.map( (image,index) => {
        return(
            <div key={index}>
                <img src={image.img_black} alt="ImageHere" className='blackImg' />
                <img src={image.img} alt="ImageHere" className='colorImg'/>
            </div>
        )
    });

    return(
        <section className='cash-studies'>
            <div className="information dfc">
                <h3>Cash Studies</h3>
                <p>Explore how Pruthatek shaped multiple businesses with creativity and innovative technology.</p>
            </div>
            <div className='imageSlider'>
                {images}
            </div>
            <div className='hoverImages'>
                {blackImages}
            </div>
        </section>
    );
}

export default CashStudies;