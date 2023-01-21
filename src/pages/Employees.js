// import React, { useState, useEffect } from "react";
import SingleEmployee from "../components/SingleEmployee";
import { useGlobalContext } from "../context";

const Employees = () => {
  const { employees } = useGlobalContext();
  return (
    <section className="section-center">
      {employees.map((employee) => {
        return <SingleEmployee {...employee} key={employee.id} />;
      })}
    </section>
  );
};

export default Employees;
