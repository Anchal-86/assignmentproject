import React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
export default function LastPage() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"70vh"}}>
      <div style={{marginBottom:"50px",textAlign:"center"}}>
        <h2>Learning paths based on your answers</h2>
        <small>Choose one to get started. You can switch anytime.</small>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{
            marginRight:"30px"
          }}
        >
          <Badge sx={{paddingRight:"5px",display:"flex",alignItems:"center",justifyContent:"center"}} color="warning" badgeContent="Most Popular">
            <div
              style={{
                width: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid #f2f2f2",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <p>
                <strong>Foundational Math</strong> Build your foundational
                skills in algebra, geometry, and probability.
              </p>
              <img
                style={{ width: "150px", height: "150px" }}
                src="https://png.pngtree.com/png-clipart/20220131/original/pngtree-charater-business-cartoon-png-image_7256972.png"
                alt=""
              />
            </div>
          </Badge>
        </Stack>

        <div
          style={{
            width: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid #f2f2f2",
            borderRadius: "5px",
            marginLeft: "20px",
            padding: "10px",
          }}
        >
          <p>
            <strong>Mathematical Thinking</strong> Build your foundational
            skills in algebra, geometry, and probability.
          </p>
          <img
            style={{ width: "150px", height: "150px" }}
            src="https://png.pngtree.com/png-clipart/20220131/original/pngtree-charater-business-cartoon-png-image_7256972.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
