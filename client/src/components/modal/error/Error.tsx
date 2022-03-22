import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {GrFormClose} from "react-icons/gr";
import {BiCommentError} from "react-icons/bi";

import "./Error.css"


const backDropVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
};

const modalVariants = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "100px",
        opacity: 1,
        transition: {delay: 0.5}
    },
    exit: {
        y: "-100vh",
        opacity: 0,
        transition: {delay: 0.5, duration: 5}
    }
};

const btnHoverEffect = {
    scale: 1.05,
    color: "white",
    boxShadow: "0px 0px 5px",
};

interface Props {
    toggleModal: () => void;
}

const Error: React.FC<Props>= ({toggleModal}) => {

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div className="backdrop"
                        variants={backDropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden">
                <motion.div className="modal-container" variants={modalVariants}>
                    <div className="modal-header">
                        <BiCommentError color="black" size="1.5rem"/>
                        <div className="modal-close-btn">
                            <GrFormClose onClick={toggleModal}
                                         color="black"
                                         size="1.8rem"/>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="modal-content">
                            <div className="modal-err-msg">Error occurred, please try again</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Error;