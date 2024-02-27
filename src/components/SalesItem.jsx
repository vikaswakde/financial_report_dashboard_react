import React, { useState } from "react";
import {
  BadgeDelta,
  Button,
  Card,
  DonutChart,
  Flex,
  TabGroup,
  Tab,
  TabList,
  Bold,
  Divider,
  List,
  ListItem,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import {
  ArrowRightIcon,
  ChartPieIcon,
  ViewListIcon,
} from "@heroicons/react/outline";

const stocks = [
  {
    name: "TeamSparta Inc. Stock", // Using the main company name instead of fictional ones
    value: Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000, // Generating a random number between 5000 and 15000
    performance: `${Math.round((Math.random() * 0.05 + 0.01) * 100)}%`, // Generating a random percentage increase or decrease between 1% and 5%, rounded to two decimal places
    deltaType: TeamSpartaPerformance(), // Calling a function to determine whether the stock has increased or decreased
  },
  {
    name: "Edtech Competitor Stock",
    value: Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000,
    performance: `${Math.round((Math.random() * 0.02 + 0.01) * 100)}%`,
    deltaType: EdtechCompetitorDeltaType(),
  },
  {
    name: "Recruitment Software Competitor Stock",
    value: Math.floor(Math.random() * (12000 - 8000 + 1)) + 8000,
    performance: `${Math.round((Math.random() * 0.03 + 0.01) * 100)}%`,
    deltaType: RecruiterSoftwareDeltaType(),
  },
  {
    name: "Game Studio Competitor Stock",
    value: Math.floor(Math.random() * (18000 - 10000 + 1)) + 10000,
    performance: `${Math.round((Math.random() * 0.04 + 0.01) * 100)}%`,
    deltaType: GameStudioDeltaType(),
  },
  {
    name: "Entrepreneur Support Service Stock",
    value: Math.floor(Math.random() * (12000 - 8000 + 1)) + 8000,
    performance: `${Math.round((Math.random() * 0.03 + 0.01) * 100)}%`,
    deltaType: EntrepreneurSupportServiceDeltaType(),
  },
];

function TeamSpartaPerformance() {
  if (Math.random() < 0.5) return "increase";
  else return "decrease";
}

function EdtechCompetitorDeltaType() {
  if (Math.random() < 0.5) return "moderateDecrease";
  else if (Math.random() < 0.75) return "moderateIncrease";
  else return "increase";
}

function RecruiterSoftwareDeltaType() {
  if (Math.random() < 0.5) return "moderateDecrease";
  else if (Math.random() < 0.75) return "moderateIncrease";
  else return "increase";
}

function GameStudioDeltaType() {
  if (Math.random() < 0.5) return "decrease";
  else if (Math.random() < 0.75) return "moderateIncrease";
  else return "increase";
}

function EntrepreneurSupportServiceDeltaType() {
  if (Math.random() < 0.5) return "moderateDecrease";
  else if (Math.random() < 0.75) return "moderateIncrease";
  else return "increase";
}


const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const SalesItem = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Card className="max-w-full mx-auto">
      <Flex className="space-x-8 flex-col lg:flex-row">
        <Title>Overview</Title>
        <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
          <TabList variant="solid">
            <Tab icon={ChartPieIcon}>Chart</Tab>
            <Tab icon={ViewListIcon}>List</Tab>
          </TabList>
        </TabGroup>
      </Flex>
      <Text className="mt-8">Portfolio Value</Text>
      {/* <Metric>{stock.value}</Metric> */}
      <Divider />
      <Text className="mt-8">
        <Bold>Asset Allocation</Bold>
      </Text>
      <Text>1 Asset class - 5 Holdings</Text>
      {selectedIndex === 0 ? (
        <DonutChart
          data={stocks}
          valueFormatter={dataFormatter}
          showAnimation={false}
          category="value"
          index="name"
          className="mt-6"
        />
      ) : (
        <>
          <Flex className="mt-8" justifyContent="between">
            <Text className="truncate">
              <Bold>Stocks</Bold>
            </Text>
            <Text>Since transaction</Text>
          </Flex>
          <List className="mt-4">
            {stocks.map((stock) => (
              <ListItem key={stock.name}>
                <Text>{stock.name}</Text>
                <Flex className="space-x-2" justifyContent="end">
                  <Text>
                    $ {Intl.NumberFormat("us").format(stock.value).toString()}
                  </Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Flex className="mt-6 pt-4 border-t">
        <Button
          size="xs"
          variant="light"
          icon={ArrowRightIcon}
          iconPosition="right"
        >
          View more
        </Button>
      </Flex>
    </Card>
  );
};

export default SalesItem;