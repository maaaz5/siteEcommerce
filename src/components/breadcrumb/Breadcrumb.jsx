import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Breadcrumbs, Typography, Link } from "@mui/material";

const Breadcrumb = (props) => {
  let location = useLocation();
  let navigate = useNavigate();

  let pathnames = location.pathname.split("/").filter((x) => x);

  console.log(pathnames);
  console.log(navigate);
  console.log("you are in checkout page");

  return (
    <BreadWrapper>
      <Breadcrumbs>
        <Link className="lis" onClick={() => navigate("/")}>
          Home
        </Link>
        {pathnames.map((name, index) => {
          const toWhere = pathnames.slice(0, index + 1).join("/");
          console.log(toWhere);
          return index == pathnames.length - 1 ? (
            <Typography className="sp">{name}</Typography>
          ) : (
            <Link className="lis" onClick={() => navigate(toWhere)}>
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </BreadWrapper>
  );
};
const BreadWrapper = styled.div`
  nav {
    .sp {
      font-size: var(--caption);
      color: var(--blackA);
      cursor: default;
    }
    .lis {
      text-decoration: none;
      font-size: var(--caption);
      color: var(--blackC);
      cursor: pointer;
    }
  }
`;
export default Breadcrumb;
