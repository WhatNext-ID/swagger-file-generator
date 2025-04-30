import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqAccordion: React.FC = () => {
  return (
    <div className="flex-[6] p-4">
      <h2 className="text-xl font-semibold">Frequently Ask</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is this website free to use?</AccordionTrigger>
          <AccordionContent>
            Yes. It can use free for user to generate and edit the documentation
            file inside JSON Section Edit Feature.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
