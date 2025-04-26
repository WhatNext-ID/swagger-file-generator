import { UseFormReturn, useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { BasicSwaggerSchema } from '@/utils/form/form.helper';
import { licenses } from '@/utils/license';

interface SetValue {
  form: UseFormReturn<BasicSwaggerSchema>;
}

const BasicPartForm: React.FC<SetValue> = ({ form }) => {
  const { fields, append, remove } = useFieldArray({
    name: 'tags',
    control: form.control,
  });

  return (
    <Form {...form}>
      <form>
        <div className="space-y-4">
          <Card className="space-y-4 p-2">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              OAS Version
            </h4>
            <FormField
              control={form.control}
              name="swagger"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a OpenAPI Specs" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="2.0">2.0</SelectItem>
                      <SelectItem value="3.0.1">3.0.1</SelectItem>
                      <SelectItem value="3.0.2">3.0.2</SelectItem>
                      <SelectItem value="3.0.3">3.0.3</SelectItem>
                      <SelectItem value="3.1.0">3.1.0</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choose OpenAPI Spesification Version you will use.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              API/Server URL
            </h4>
            <FormField
              control={form.control}
              name="api"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="Please insert your API/Server Url"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Set your url server here.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Information API Docs
            </h4>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please insert your swagger title"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Add your swagger documentation title.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about your API"
                        className=" resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Give the description about this swagger documentation.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="version"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Version</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please insert your API version"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Add versioning base on your API URL Server.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="license.name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>OpenAPI License</FormLabel>
                      <Select
                        onValueChange={(jsonValue) => {
                          const selected = JSON.parse(jsonValue);
                          field.onChange(selected.name);
                          form.setValue('license.url', selected.url);
                        }}
                        value={
                          licenses.find((l) => l.name === field.value)
                            ? JSON.stringify({
                                name: field.value,
                                url: form.getValues('license.url'),
                              })
                            : undefined
                        }
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a OpenAPI License" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {licenses.map((license) => (
                            <SelectItem
                              key={license.name}
                              value={JSON.stringify(license)}
                            >
                              {license.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Selecting a license also sets its URL.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Tags
            </h4>
            <div>
              {fields.map((field, index) => (
                <div className="flex gap-2" key={field.id}>
                  <FormField
                    control={form.control}
                    name={`tags.${index}.name`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className={cn(index !== 0 && 'sr-only')}>
                          Tag Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Add tag name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`tags.${index}.desc`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className={cn(index !== 0 && 'sr-only')}>
                          Tag Description
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Add tag description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => append({ name: '', desc: '' })}
              >
                Add Tag
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2 ml-1 bg-red-300 hover:bg-red-500 hover:text-white"
                onClick={() => {
                  if (fields.length > 1) {
                    remove(fields.length - 1);
                  }
                }}
                disabled={fields.length === 1}
              >
                Remove Tag
              </Button>
            </div>
          </Card>
        </div>
      </form>
    </Form>
  );
};

export default BasicPartForm;
