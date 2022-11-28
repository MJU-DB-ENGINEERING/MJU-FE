/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { getEmployeeID, updateProjectPMEvaluation } from "../../common/api";
import { useNavigate } from "react-router-dom";

const EvaluationInputBox = (props) => {
  const navigate = useNavigate();
  const { evaluated, evaluator, projectId } = props.data;
  const [businessComment, setBusinessComment] = useState("");
  const [businessRating, setBusinessRating] = useState(0);
  const [communicationComment, setCommunicationComment] = useState("");
  const [communicationRating, setCommunicationRating] = useState(0);

  const businessHander = (event) => {
    setBusinessComment(event.target.value);
  };

  const communicationHandler = (event) => {
    setCommunicationComment(event.target.value);
  };

  const saveHandler = async () => {
    const id = await getEmployeeID(evaluated);
    const payload = {
      businessComment: businessComment,
      businessRate: businessRating,
      communicationComment: communicationComment,
      communicationRate: communicationRating,
      evaluated: id, // fix-me
      evaluator: 64, // fix-me
      projectId: projectId,
    };
    await updateProjectPMEvaluation(payload);
    navigate(-1);
  };

  return (
    <>
      <Paper elevation={16}>
        <Box sx={{ p: 2, border: "3px grey" }}>
          <Typography variant="h4">
            {" "}
            {evaluated} 님에 대한 프로젝트 평가를 시작합니다.
          </Typography>
          <br />
          <Typography variant="h6" width={200}>
            업무 수행 평가
          </Typography>
          <Rating
            width={200}
            name="simple-controlled"
            size="large"
            value={businessRating}
            onChange={(event, newValue) => {
              setBusinessRating(newValue);
            }}
          />
          <br />
          <br />
          <Typography variant="h6" width={200}>
            업무 수행 평가 내용
          </Typography>
          <TextField
            width={200}
            id="outlined-multiline-flexible"
            label=""
            multiline
            minRows={3}
            maxRows={6}
            fullWidth
            value={businessComment}
            onChange={businessHander}
          />
          <br />
          <br />
          <Typography variant="h6" width={200}>
            커뮤니케이션 평가
          </Typography>
          <Rating
            name="simple-controlled"
            size="large"
            value={communicationRating}
            onChange={(event, newValue) => {
              setCommunicationRating(newValue);
            }}
          />
          <br />
          <br />
          <Typography variant="h6" width={200}>
            커뮤니케이션 평가 내용
          </Typography>
          <TextField
            id="outlined-multiline-flexible"
            label=""
            multiline
            fullWidth
            minRows={3}
            maxRows={6}
            value={communicationComment}
            onChange={communicationHandler}
          />
          <Grid container justifyContent="flex-end">
            <Button
              variant="outlined"
              sx={{ padding: 1, margin: 2 }}
              onClick={saveHandler}
            >
              저장하기
            </Button>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default EvaluationInputBox;
