import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  VStack,
  Text,
  Card,
  CardBody,
  SimpleGrid,
  Link,
  Flex,
} from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function PatentAnalysisDashboard() {
  const [claimText, setClaimText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [drawingFile, setDrawingFile] = useState(null);

  const extractedKeywords = ["Keyword1", "Keyword2", "Keyword3", "Keyword4"];
  const similarPatents = [
    {
      number: "CA 2978367",
      link: "https://www.ic.gc.ca/opic-cipo/cpd/eng/patent/2978367/summary.html?query=2978367&type=basic_search",
    },
    { number: "CA 2978368", link: "https://example.com/patent2" },
    { number: "CA 2978369", link: "https://example.com/patent3" },
  ];
  const chartData = {
    labels: ["Metric A", "Metric B", "Metric C"],
    datasets: [
      {
        label: "Sample Data",
        data: [65, 59, 80],
        backgroundColor: ["#3f51b5", "#ff4081", "#4caf50"],
      },
    ],
  };

  const handleDrawingUpload = (e) => {
    setDrawingFile(e.target.files[0]);
  };

  const handleEnter = () => {
    console.log("Claim Text:", claimText);
    console.log("Description Text:", descriptionText);
    console.log("Drawing File:", drawingFile);
    alert("Information has been successfully passed for processing.");
  };

  return (
    <Box bg="gray.50" minH="100vh" py={10} px={4} pt="80px">
      {/* Added pt="80px" to push content below the header */}
      <Heading as="h1" size="lg" textAlign="center" mb={6} color="gray.700">
        Patent Analysis Dashboard
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {/* Keywords Section */}
        <Card>
          <CardBody>
            <Heading as="h2" size="md" mb={4} color="blue.500">
              Extracted Keywords
            </Heading>
            <VStack spacing={3} align="start">
              {extractedKeywords.map((keyword, index) => (
                <Text key={index} fontSize="md" color="gray.700">
                  {keyword}
                </Text>
              ))}
            </VStack>
          </CardBody>
        </Card>

        {/* Form Section */}
        <Card>
          <CardBody>
            <VStack spacing={4}>
              <Box w="full">
                <Text mb={1} fontWeight="bold">
                  Enter Claim
                </Text>
                <Input
                  placeholder="Write or paste your patent claim here..."
                  value={claimText}
                  onChange={(e) => setClaimText(e.target.value)}
                  size="md"
                  bg="white"
                />
              </Box>

              <Box w="full">
                <Text mb={1} fontWeight="bold">
                  Enter Description
                </Text>
                <Input
                  placeholder="Write or paste your patent description here..."
                  value={descriptionText}
                  onChange={(e) => setDescriptionText(e.target.value)}
                  size="md"
                  bg="white"
                />
              </Box>

              <Button as="label" colorScheme="blue" size="md" w="full" cursor="pointer">
                Upload Drawing
                <Input type="file" accept="image/*" hidden onChange={handleDrawingUpload} />
              </Button>

              <Button colorScheme="green" size="md" w="full" onClick={handleEnter}>
                Enter
              </Button>
            </VStack>
          </CardBody>
        </Card>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={6}>
        {/* Similar Patents Section */}
        <Card>
          <CardBody>
            <Heading as="h2" size="md" mb={4} color="blue.500">
              Most Similar Patents
            </Heading>
            <VStack spacing={3} align="start">
              {similarPatents.map((patent, index) => (
                <Link
                  key={index}
                  href={patent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="blue.600"
                  isExternal
                  fontWeight="medium"
                >
                  {patent.number}
                </Link>
              ))}
            </VStack>
          </CardBody>
        </Card>

        {/* Visualization Section */}
        <Card>
          <CardBody>
            <Heading as="h2" size="md" mb={4} color="blue.500">
              Visualization
            </Heading>
            <Flex justify="center">
              <Box w="100%" h="250px" maxWidth="500px" overflow="hidden">
                <Bar data={chartData} options={{ maintainAspectRatio: true }} />
              </Box>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

export default PatentAnalysisDashboard;
