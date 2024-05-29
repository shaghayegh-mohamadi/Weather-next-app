
export interface WeatherData {
    name:string;
    weather: {
      description: string;
      icon: string;
      main:number
    }[];
    main : {
      feels_like :number;
      humidity :number;
      pressure :number;
      temp :number;
      temp_max:number;
      temp_min:number;
    }
    wind : {
      deg: number;
      speed:number;
    }
    sys: {
      sunrise:number;
      sunset:number;
    }
  }
  