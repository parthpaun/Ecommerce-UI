import { Link } from "react-router";

export default function Heading() {
  return (
    <div className="heading mb-5">
      <h1 className="text-2xl font-semibold mb-2">Hydraulic Fluids</h1>
      <p className="">
        Hydraulic oil is a fluid that has several functions. It serves as an
        energy transfer or power transmission medium, lubricant, and sealant.
        Also, it is a fluid that cools the equipment and carries contaminants
        away. Based on the division of hydraulics into hydrodynamics and
        hydrostatics, we have different hydraulic fluids. Firstly, hydraulic
        fluids for hydrodynamic applications are called power-transmission oils.
        Secondly, hydraulic fluids for hydrostatic application are called
        hydraulic oils.{" "}
        <Link to="#" className="text-[#3B82F6] hover:underline">
          Read more.
        </Link>
      </p>
    </div>
  );
}
