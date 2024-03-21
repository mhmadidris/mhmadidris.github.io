import { Box } from "@chakra-ui/react";

interface PortofolioDetailProps {
    params: {
        portofolioTitle: string;
    };
}

const PortofolioDetail: React.FC<PortofolioDetailProps> = ({ params }) => {
    return (
        <Box>
            Detail Title {params.portofolioTitle}
        </Box>
    );
};

export default PortofolioDetail;
