import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const brands = [
  "Dennis Lingo",
  "Raymond",
  "Otus",
  "Red Tape",
  "Indo Primo",
  "Amazon Brand-Symbol",
];

export default function Brand(props) {
  return (
    <>
      <b>Brands</b>
      {brands.map((brand) => {
        return (
          <div key={`${brand}`} className="mb-3">
            <Form.Check
              type="checkbox"
              id={brand}
              label={brand}
              value={brand}
            />
          </div>
        );
      })}
    </>
  );
  // const [selectedBrands, setSelectedBrands] = useState([]);

  // const onBrandChange = (event) => {
  //   const newBrands=selectedBrands;
  //   if (event.target.checked) {
  //     newBrands.push(event.target.value);
  //     //console.log("new brands",newBrands);
  //     setSelectedBrands(newBrands);
  //   } else {
  //     let index = newBrands.indexOf(event.target.value);
  //     newBrands.splice(index, 1);
  //     setSelectedBrands(newBrands);
  //     //console.log("new brands",newBrands);
  //   }
  //   props.filterByBrand(newBrands);
  //   //console.log("brand change", event.target.checked);
  // };

  // return (
  //   <>
  //     <b>Brand</b>
  //     {brands.map((brand) => (
  //       <div key={`${brand}`} className="mb-3">
  //         <Form.Check
  //           type="checkbox"
  //           id={brand}
  //           label={brand}
  //           onChange={onBrandChange}
  //           value={brand}
  //         />
  //       </div>
  //     ))}
  //   </>
  // );
}
