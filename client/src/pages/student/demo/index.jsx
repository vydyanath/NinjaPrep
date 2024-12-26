import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  
function StudentDemoPage(){
    return (
        <Dialog open={true}>
        <DialogContent className="sm:w-[425px]">
          <DialogHeader>
            <DialogTitle>This is a demo account</DialogTitle>
            <DialogDescription>
              You cannot purchase this course,To purchase please create an account of your own.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
} 

export default StudentDemoPage;