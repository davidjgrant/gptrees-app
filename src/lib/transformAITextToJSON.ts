// transform string to JSON
export const transformAITextToJSON = (response: string) => {
  return JSON.parse(response) as Record<string, string>;
}