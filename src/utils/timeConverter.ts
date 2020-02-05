const concatNullValue = (characters: number) => (value: string) => {
      return Array.from({length: characters - value.length})
            .map(() => 0).join('') + value;
}

export function formatTime(milliseconds: number): string {
      const ms = concatNullValue(3)(
            String(milliseconds % 1000)
      );
      const seconds = concatNullValue(2)(
            String(Math.floor(milliseconds / 1000) % 60)
      );
      const minutes = concatNullValue(2)(
            String(Math.floor(milliseconds / 60000))
      );
      return `${minutes}:${seconds}.${ms}`;
};