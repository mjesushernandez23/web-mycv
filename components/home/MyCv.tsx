import usePrint from "@hooks/usePrint";
import { Button, Typography } from "@mui/material";

const MyCv = () => {
  const { nodeRef, handlePrint } = usePrint();

  return (
    <div >
      <div ref={nodeRef} className="">
        <Typography variant="h1">test</Typography>
        <Typography variant="h1">test</Typography>
        <Typography variant="h1">test</Typography>
        <Typography variant="h1">test</Typography>
        <Typography variant="h1">test</Typography>
        <Typography variant="h1">test</Typography>
        <Typography variant="h1">test</Typography>
        <Typography variant="h1">test</Typography>
        <Typography variant="h1">test</Typography>
        <Typography variant="h1">test</Typography>
        <Typography variant="h1">test</Typography>
        <Typography variant="h1">test</Typography>
        <Typography variant="h1">test</Typography>
        <Typography variant="h1">test</Typography>
        
      </div>
      <Button onClick={() => handlePrint()}>Print</Button>
    </div>
  );
};

export default MyCv;
