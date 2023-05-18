import { Alert, Snackbar } from "@mui/material";
import { ReactNode, useState } from "react";

export function CopyToClipboardButton({
  type,
  content,
}: {
  type: ReactNode;
  content: string;
}) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(content);
  };

  return (
    <>
      <div
        onClick={handleClick}
        title="Share"
        style={{
          width: "fit-content",
          height: "fit-content",
          cursor: "pointer",
        }}
      >
        {type}
      </div>

      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          sx={{
            backgroundColor: "#8c00ef",
            color: "#fff",
            ".MuiAlert-icon": {
              color: "#fff",
            },
          }}
        >
          Copied to clipboard
        </Alert>
      </Snackbar>
    </>
  );
}
