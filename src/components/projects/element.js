import "./element.css";
import "../../static/css/grid.css";
import python_logo from '../../static/images/logos/python.png';
import django_logo from '../../static/images/logos/django.png';
import drf_logo from '../../static/images/logos/drf.png';
import react_logo from '../../static/images/logos/react.png';
import js_logo from '../../static/images/logos/js.png';
import html_logo from '../../static/images/logos/html.png';
import css_logo from '../../static/images/logos/css.png';

const logos = [python_logo, django_logo, drf_logo, js_logo, react_logo,  html_logo, css_logo]


function Element(props) {

    const logo_divs = [];
    for(let i in props.technologies){
        logo_divs.push(
            <div key={i} className="col-no-grow m-1 my-2">
            <div className="row content-start">
                <img className="logo" alt="" src={logos[props.technologies[i]]} ></img>
            </div>
        </div>
        );
    }

    return (
        <div className='card-container'>
            <div className={props.reverse ? 'card card-reverse' : 'card'}>

                <div className="card-img-container">
                    <img alt="" className={props.imgShadow ? 'card-img card-img-shadow' : 'card-img'} src={props.img}></img>
                </div>

                <div className='card-text text-left'>
                    <h3 className="my-1 self-center"><a className="card-title" href={props.link} >{props.title}</a></h3>
                    {props.description}
                    <div className="row">
                        {logo_divs}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Element;

