const asynchandler = (requestHandler) =>{
    (req,res,next) => {
        Promise.resolve(requestHandler(req , res , next)).catch(
            (err => next(err))
        )
    }
    }



export {asynchandler}

// const asynchandler = () => {}
// const asynchandler= (handleFunction) = {() => {}};
// const asynchandler = (handleFunction) => async () => {};

// const asynchandler = (handleFunction) => async (req,res,next) => {
//     try {
//         await handleFunction(req,res,next)
        
//     } catch (error) {
//         res.status(error.code || 400).json({
//             status: 'fail',
//             message: error.message
//         })
//     }
// }