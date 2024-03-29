import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

export function Posts() {
  return (
    <div className="rounded-lg border p-2 shadow-sm">
      <Table className="overflow-x-scroll">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Posts</TableHead>
            <TableHead className="min-w-[150px]">User</TableHead>
            <TableHead className="hidden md:table-cell">Channel</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableHead className="hidden text-right md:table-cell">
              Total
            </TableHead>
            <TableHead className="hidden sm:table-cell">Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">#3210</TableCell>
            <TableCell>Olivia Martin</TableCell>
            <TableCell className="hidden md:table-cell">Online Store</TableCell>
            <TableCell className="hidden md:table-cell">
              February 20, 2022
            </TableCell>
            <TableCell className="hidden text-right md:table-cell">
              $42.25
            </TableCell>
            <TableCell className="hidden sm:table-cell">Shipped</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoreHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View post</DropdownMenuItem>
                  <DropdownMenuItem>User details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#3209</TableCell>
            <TableCell>Ava Johnson</TableCell>
            <TableCell className="hidden md:table-cell">Shop</TableCell>
            <TableCell className="hidden md:table-cell">
              January 5, 2022
            </TableCell>
            <TableCell className="hidden text-right md:table-cell">
              $74.99
            </TableCell>
            <TableCell className="hidden sm:table-cell">Paid</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoreHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View post</DropdownMenuItem>
                  <DropdownMenuItem>User details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#3204</TableCell>
            <TableCell>Michael Johnson</TableCell>
            <TableCell className="hidden md:table-cell">Shop</TableCell>
            <TableCell className="hidden md:table-cell">
              August 3, 2021
            </TableCell>
            <TableCell className="hidden text-right md:table-cell">
              $64.75
            </TableCell>
            <TableCell className="hidden sm:table-cell">Unfulfilled</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoreHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View post</DropdownMenuItem>
                  <DropdownMenuItem>User details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#3203</TableCell>
            <TableCell>Lisa Anderson</TableCell>
            <TableCell className="hidden md:table-cell">Online Store</TableCell>
            <TableCell className="hidden md:table-cell">
              July 15, 2021
            </TableCell>
            <TableCell className="hidden text-right md:table-cell">
              $34.50
            </TableCell>
            <TableCell className="hidden sm:table-cell">Shipped</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoreHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View post</DropdownMenuItem>
                  <DropdownMenuItem>User details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#3202</TableCell>
            <TableCell>Samantha Green</TableCell>
            <TableCell className="hidden md:table-cell">Shop</TableCell>
            <TableCell className="hidden md:table-cell">June 5, 2021</TableCell>
            <TableCell className="hidden text-right md:table-cell">
              $89.99
            </TableCell>
            <TableCell className="hidden sm:table-cell">Paid</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoreHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View post</DropdownMenuItem>
                  <DropdownMenuItem>User details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#3201</TableCell>
            <TableCell>Adam Barlow</TableCell>
            <TableCell className="hidden md:table-cell">Online Store</TableCell>
            <TableCell className="hidden md:table-cell">May 20, 2021</TableCell>
            <TableCell className="hidden text-right md:table-cell">
              $24.99
            </TableCell>
            <TableCell className="hidden sm:table-cell">Unfulfilled</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoreHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View post</DropdownMenuItem>
                  <DropdownMenuItem>User details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#3207</TableCell>
            <TableCell>Sophia Anderson</TableCell>
            <TableCell className="hidden md:table-cell">Shop</TableCell>
            <TableCell className="hidden md:table-cell">
              November 2, 2021
            </TableCell>
            <TableCell className="text-right">$99.99</TableCell>
            <TableCell className="hidden sm:table-cell">Paid</TableCell>
            <TableCell className="hidden text-right md:table-cell">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoreHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View post</DropdownMenuItem>
                  <DropdownMenuItem>User details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#3206</TableCell>
            <TableCell>Daniel Smith</TableCell>
            <TableCell className="hidden md:table-cell">Online Store</TableCell>
            <TableCell className="hidden md:table-cell">
              October 7, 2021
            </TableCell>
            <TableCell className="text-right">$67.50</TableCell>
            <TableCell className="hidden sm:table-cell">Shipped</TableCell>
            <TableCell className="hidden text-right md:table-cell">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoreHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View post</DropdownMenuItem>
                  <DropdownMenuItem>User details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

function MoreHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}
