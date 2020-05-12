import { Ringbuffer } from "../src/ringbuffer";

describe("Ringbuffer", () => {
  it("should act like example from internet ;)", () => {
    const ringbuffer = new Ringbuffer<number>(3);
    ringbuffer.add(1);
    ringbuffer.add(2);
    expect(ringbuffer.size).toEqual(3);
    expect(ringbuffer.count()).toEqual(2);
    expect(ringbuffer.take()).toEqual(1);
    ringbuffer.add(3);
    ringbuffer.add(4);
    ringbuffer.add(5);
    expect(ringbuffer.take()).toEqual(3);
    ringbuffer.add(6);
    ringbuffer.add(7);
    expect(ringbuffer.take()).toEqual(5);
    expect(ringbuffer.take()).toEqual(6); 
    expect(ringbuffer.take()).toEqual(7);
  });
});
