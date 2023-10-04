import { generateProtocolForPacient } from "protocols-generator";

jest.mock('uuid', ()=>{
  return { v4: ()=>"valor simulado mock"}
})

describe("calculator tests", () => {
  it("should return a object with uuid", () => {

    const result  = generateProtocolForPacient('thiago', 'sousa', true);

    expect(result).toEqual({
      priority: true,
      date: expect.any(Date),
      pacient: `thiago sousa`,
      protocol: "valor simulado mock"
    });
  });
});