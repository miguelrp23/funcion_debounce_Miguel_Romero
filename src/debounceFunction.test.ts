import { debounceFunction } from './debounceFunction';

// Utiliza temporizadores falsos en Jest
jest.useFakeTimers();

describe('debounceFunction', () => {
  it('should call the callback after the specified delay', () => {
    const callback = jest.fn();
    const debounced = debounceFunction(callback, 250);

    debounced('test');
    
    // Avanza el tiempo por 250ms
    jest.advanceTimersByTime(250);

    expect(callback).toHaveBeenCalledWith('test');
  });

  it('should only call the callback once if invoked multiple times within the delay', () => {
    const callback = jest.fn();
    const debounced = debounceFunction(callback, 250);

    debounced('test1');
    debounced('test2');
    debounced('test3');
    
    // Avanza el tiempo por 250ms
    jest.advanceTimersByTime(250);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('test3');
  });

  it('should reset the delay if invoked again within the delay period', () => {
    const callback = jest.fn();
    const debounced = debounceFunction(callback, 250);

    debounced('test1');
    
    // Avanza el tiempo por menos de 250ms
    jest.advanceTimersByTime(200);

    debounced('test2');
    
    // Avanza el tiempo por 250ms adicionales
    jest.advanceTimersByTime(250);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('test2');
  });
});
