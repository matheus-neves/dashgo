import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

const siblingsCount = 2;

function generationPagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0)
}

export default function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {

  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPages = currentPage > 1
    ? generationPagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generationPagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack
        direction="row"
        spacing="2"
      >

        {
          currentPage > (1 + siblingsCount) && (
            <>
              <PaginationItem onPageChange={onPageChange} number={1} />
              {currentPage > (2 + siblingsCount) && (
                <Text color="gray.300" width="8" textAlign="center">...</Text>
              )}
            </>
          )
        }

        {
          previousPages.length > 0 && previousPages.map(page => (
            <PaginationItem onPageChange={onPageChange} key={page} number={page} />
          ))
        }
        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />
        {
          nextPages.length > 0 && nextPages.map(page => (
            <PaginationItem onPageChange={onPageChange} key={page} number={page} />
          ))
        }

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}