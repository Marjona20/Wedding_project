import styled from "styled-components";

const padding = "20px";

const ContainerWrapper = styled.div`
    display: flex;
        a{
            color: white !important;
        }
        .MuiListItemIcon-root {
            color: white !important;
        }
    }

    .rightside{
        flex: 1;

        header{
            background-color: white;
            position: sticky;
            top: 0;
            z-index: 1000;

        .text-style{
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            line-height: 29px;
            margin-left:30px;
            color: #7C7676;
            cursor: pointer;
        }
        .text-style:hover{
            color:red;
        }
        }
        .content{
            padding: ${padding};
        }
    }
`;

export default ContainerWrapper;