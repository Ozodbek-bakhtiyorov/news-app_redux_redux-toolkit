
 
import img from "../assets/images/bg.jpg";

export default function NewsListItem({id, name, description, category,clickHanler }) {

  let elementclassname;
  switch (category) {
    case "hot":
      elementclassname = "bg-danger bg-gradient";
      break;
    case "sport":
      elementclassname = "bg-primary bg-gradient";
      break;
    case "edu":
      elementclassname = "bg-secondary bg-gradient";
      break;
    default:
      elementclassname = "bg-info bg gradient";
  }

  return (
    <li
      className={`card flex-row shadow-lg  text-white mb-4 ${elementclassname}`}
    >

      <img
        src={img}
        className="card-img img-fluid w-50 h-auto d-inline"
        style={{ objectFit: "cover", objectPosition: "center right" }}
        alt={name}
      />

      <div className="card-body">

        <h3 className="card-title">{name}</h3>

        <p className="card-text">{description}</p>

        <span onClick={clickHanler} 
            className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light"
            >

          <button
            type="button"
            className="btn-close "
            aria-label="Close"
          ></button>

        </span>
      </div>
    </li>
  );
}
