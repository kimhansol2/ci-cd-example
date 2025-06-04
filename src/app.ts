import express, { Application, Request, Response } from "express";

const app: Application = express();

// 기본 라우트
app.get("/", (_: Request, res: Response) => {
  res.json({
    message: "TypeScript Express 서버가 정상적으로 실행 중입니다!",
  });
});

// 서버 시작
app.listen(3001, () => {
  console.log(`서버가 http://localhost:3001 에서 실행 중입니다`);
});
