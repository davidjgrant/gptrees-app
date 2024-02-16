"use client";

import {
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";

export function Analytics() {
  return (
    <div className="grid w-full gap-6">
      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-4">
          <div className="flex flex-col">
            <CardDescription className="mb-1">Total Posts</CardDescription>
            <CardTitle className="text-2xl font-bold">12,345</CardTitle>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <ArrowUpIcon className="h-3 w-3 fill-current" />
              <span className="font-semibold">25%</span>
              New Posts
            </div>
            <div className="flex items-center gap-1">
              <ArrowDownIcon className="h-3 w-3 fill-current" />
              <span className="font-semibold">10%</span>
              Data Points
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CurvedlineChart className="h-[250px] w-full max-w-[100%]" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-4">
          <div className="flex flex-col">
            <CardDescription className="mb-1">Support Tickets</CardDescription>
            <CardTitle className="text-2xl font-bold">345</CardTitle>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <ArrowUpIcon className="h-3 w-3 fill-current" />
              <span className="font-semibold">25%</span>
              Resolved{"\n                                  "}
            </div>
            <div className="flex items-center gap-1">
              <ArrowDownIcon className="h-3 w-3 fill-current" />
              <span className="font-semibold">10%</span>
              Pending{"\n                                  "}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CurvedlineChart className="h-[250px] w-full max-w-[100%]" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-4">
          <div className="flex flex-col">
            <CardDescription className="mb-1">Feature Usage</CardDescription>
            <CardTitle className="text-2xl font-bold">
              Top Feature: API
            </CardTitle>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <ArrowUpIcon className="h-3 w-3 fill-current" />
              <span className="font-semibold">25%</span>
              New Users{"\n                                  "}
            </div>
            <div className="flex items-center gap-1">
              <ArrowDownIcon className="h-3 w-3 fill-current" />
              <span className="font-semibold">10%</span>
              Churn{"\n                                  "}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CurvedlineChart className="h-[250px] w-full max-w-[100%]" />
        </CardContent>
      </Card>
    </div>
  );
}

function ArrowUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

function CurvedlineChart(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
