import React from "react";

function List({
  class1,
  class2,
  class3,
  class4,
  class5,
  prof1,
  prof2,
  prof3,
  prof4,
  prof5,
}) {
  return (
    <div className="list">
      <ul>
        <li>
          {class1} - {prof1}
        </li>
        <li>
          {class2} - {prof2}
        </li>
        <li>
          {class3} - {prof3}
        </li>
        <li>
          {class4} - {prof4}
        </li>
        <li>
          {class5} - {prof5}
        </li>
      </ul>
    </div>
  );
}

export default List;
