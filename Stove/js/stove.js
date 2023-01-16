//Desenvolvido por Elielder Oliveira
//https://github.com/Taganet

class Stove
{
    constructor(burns, oven, ovenCoverSizeW, ovenCoverSizeH, stoveColor, stoveSizeW, stoveSizeH, stoveBrand) {
        this.burns = burns;
        this.oven = oven;
        this.ovenCoverSizeW = ovenCoverSizeW;
        this.ovenCoverSizeH = ovenCoverSizeH;
        this.stoveColor = stoveColor;
        this.stoveSizeW = stoveSizeW;
        this.stoveSizeh = stoveSizeH;
        this.stoveBrand = stoveBrand;
        this._burnsLitFire = false;
        this._burnsLigth = false;
        this._burnID = 0;
    }

    get burning()
    {
        return this._burnsLitFire;
    }

    set burning(status)
    {
        if (status)
        {
            return this._burnsLitFire = "aceso";
        }
        else
        {
            return this._burnsLitFire = "Apagado";
        }
        
        return this._burnsLitFire = status;
    }

    get burnID()
    {
        return this._burnID;
    }

    set burnID(burnid)
    {
       return this._burnID = burnid;
    }

    get burnsLitFire()
    {
        return this._burnsLitFire;
    }

    set burnsLitFire(status)
    {
        return this._burnsLitFire = status;
    }

    get burnsLigth()
    {
        return this._burnsLigth;
    }

    set burnsLigth(status)
    {
        return this._burnsLigth = status;
    }

    BurnOnOff(burn, OnOff)
    {
        this._burnID = burn;
        this._burnsLitFire = OnOff

        if (this._burnsLitFire)
        {
            return `"${this._burnID}" is On!"`;
        }
        return `"${this._burnID}" is Off!"`;
    }
    
    LigthOnOff(OnOff)
    {
        this._burnsLigth = OnOff;

        if (this._burnsLigth)
        {
            return "Ligth is On!";
        }
        return "Ligth is Off!";
    }
}