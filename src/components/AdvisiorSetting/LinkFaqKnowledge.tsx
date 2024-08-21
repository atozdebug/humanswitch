import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Checkbox } from "flowbite-react";
import { Dropdown, Flowbite, Pagination, Spinner, Table } from "flowbite-react";
import { useDispatch } from "react-redux";
import { getFaqs } from "../../services/slices/knowledge_base/faq";

export function LinkFaqKnowledge({ allFaqs, selectedFaqs, setSelectedFaqs }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setIsOpen(false);

  const onPageChange = (page: number) => {
    dispatch(getFaqs({ page: page }));
  };

  const handleMultipleChecked = (e, faq) => {
    if (e.target.checked) {
      setSelectedFaqs([...selectedFaqs, faq]);
    } else {
      setSelectedFaqs(
        selectedFaqs.filter(selectedFaq => selectedFaq.id !== faq.id)
      );
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="my-2 flex items-center gap-2 border border-span-clr text-span-clr text-sm font-medium px-4 py-[6px] rounded-lg w-fit"
      >
        <AddCircleOutlineIcon className="w-[15px]" /> Add FAQ
      </button>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        className="max-h-[100vh] h-full w-2/5"
        position="right"
      >
        <div className="flex items-center gap-2">
          <AddCircleOutlineIcon className="w-[15px]" />
          <p>Add FAQ</p>
        </div>
        <Drawer.Items className="h-full">
          {allFaqs?.data?.length > 0 ? (
            <>
              <Table className="!static cursor-pointer ">
                <Table.Body className="divide-y">
                  {allFaqs?.data?.map((faq, index) => {
                    const isChecked = selectedFaqs.some(
                      selectedFaq => selectedFaq.id === faq.id
                    );

                    return (
                      <Table.Row
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        key={faq?.id}
                      >
                        <Table.Cell className="whitespace-nowrap font-medium text-main-heading text-sm dark:text-black">
                          <div className="flex items-center gap-3">
                            <Checkbox
                              onChange={e => handleMultipleChecked(e, faq)}
                              checked={isChecked}
                              disabled={!faq.is_trained}
                              className="bg-white outline-none focus:ring-transparent cursor-pointer"
                            />
                            {faq?.question}
                          </div>
                        </Table.Cell>

                        <Table.Cell className="flex justify-end gap-2">
                          {faq?.is_trained ? <p></p> : <p>Not Trained</p>}
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
              <div className="flex justify-center mt-3">
                <Pagination
                  currentPage={allFaqs?.page || 1}
                  totalPages={allFaqs?.total_pages || 1}
                  onPageChange={onPageChange}
                />
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-center text-gray-500">No FAQs Available</p>
            </div>
          )}
        </Drawer.Items>
      </Drawer>
    </>
  );
}
